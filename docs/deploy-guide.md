# Deploy Guide — VPS + Ansible

Сайт деплоится на VPS через Ansible: репозиторий клонируется на сервер,
собирается `dist/`, Nginx раздаёт статику, Certbot выпускает SSL-сертификат.

---

## Требования

**Локально:**
- `ansible` ≥ 2.14 — `pip install ansible`
- SSH-ключ для подключения к серверу
- Deploy key для GitHub (см. раздел ниже)

**VPS:**
- Ubuntu 22.04 / 24.04
- Открытые порты **80** и **443**
- DNS-записи `dankosava.ru` и `www.dankosava.ru` указывают на IP сервера

---

## Настройка deploy key (приватный репозиторий)

Deploy key — SSH-ключ, который даёт серверу доступ только к одному репозиторию.
Ansible загружает приватную часть на VPS, публичную нужно добавить в GitHub вручную один раз.

### 1. Сгенерировать ключ локально

```bash
ssh-keygen -t ed25519 -C "deploy@dankosava.ru" -f ~/.ssh/savadanko_deploy
```

Будет создано два файла:
- `~/.ssh/savadanko_deploy` — приватный ключ (остаётся локально, Ansible загрузит его на сервер)
- `~/.ssh/savadanko_deploy.pub` — публичный ключ (добавляется в GitHub)

### 2. Добавить публичный ключ в GitHub

```bash
cat ~/.ssh/savadanko_deploy.pub
```

Скопировать вывод и добавить в репозиторий:
**GitHub → репозиторий → Settings → Deploy keys → Add deploy key**

- Title: `VPS deploy`
- Key: вставить содержимое `.pub`
- Allow write access: **не нужно** (только чтение)

### 3. Проверить путь к ключу в настройках

`ansible/group_vars/vps.yml`:

```yaml
deploy_key_local_path: ~/.ssh/savadanko_deploy
```

Если ключ лежит в другом месте — поменяй путь.

---

## Структура Ansible-проекта

```
ansible/
├── deploy.yml                        # Точка входа
├── inventory/
│   └── hosts.ini                     # IP сервера и SSH-настройки
├── group_vars/
│   └── vps.yml                       # Домен, ветка, метаданные, SSL, admin panel
└── roles/webapp/
    ├── tasks/main.yml                # Шаги деплоя (включая admin panel)
    ├── handlers/main.yml             # Reload nginx, reload systemd
    ├── templates/nginx-http.conf.j2  # Временный HTTP-конфиг для ACME
    └── templates/nginx.conf.j2      # Финальный конфиг: HTTPS, SPA, /api/, /admin/
```

---

## Первый деплой

### 1. Указать IP сервера

Открыть `ansible/inventory/hosts.ini` и заменить `your_server_ip`:

```ini
[vps]
1.2.3.4 ansible_user=root ansible_ssh_private_key_file=~/.ssh/id_rsa
```

Если пользователь не `root` — поменяй `ansible_user` и убедись, что у него есть `sudo`.

### 2. Проверить переменные

`ansible/group_vars/vps.yml` — всё уже настроено для `dankosava.ru`.

Обязательно заполнить перед первым деплоем:

```yaml
# Пароль для входа в админ-панель (bcrypt-хэш)
# Генерация: node -e "const b=require('bcryptjs');console.log(b.hashSync('yourpassword',12))"
admin_password_hash: "$2b$12$..."

# Секрет для подписи JWT-токенов
# Генерация: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
admin_jwt_secret: "abc123..."
```

Остальные переменные уже настроены:

```yaml
site_name: Savely Danko
domain: dankosava.ru
repo_branch: main
enable_ssl: true
certbot_email: dankosaveliy.m@gmail.com
admin_port: 3001
```

### 3. Проверить SSH-доступ

```bash
ssh -i ~/.ssh/id_rsa root@<IP>
```

### 4. Запустить плейбук

Из корня репозитория:

```bash
ansible-playbook -i ansible/inventory/hosts.ini ansible/deploy.yml
```

Плейбук выполнит:
1. Установку пакетов (git, nginx, nodejs, certbot)
2. Клонирование репозитория в `/var/www/savadanko`
3. Генерацию `.env.production` из переменных `group_vars/vps.yml`
4. `npm ci && npm run build` основного сайта
5. Настройку Nginx с редиректом HTTP → HTTPS
6. Выпуск SSL-сертификата через Let's Encrypt (`--webroot`, не трогает чужие конфиги)
7. Включение автопродления сертификата (systemd timer)
8. `npm ci` для `admin/backend` и `admin/frontend`
9. Сборку `admin/frontend` (`npm run build`)
10. Создание файла `.env` для бэкенда с паролем и JWT-секретом из `group_vars/vps.yml`
11. Регистрацию и запуск systemd-сервиса `savadanko-admin` (порт 3001)

После завершения:
- Сайт доступен по **https://dankosava.ru**
- Админ-панель доступна по **https://dankosava.ru/admin/**

---

## Повторный деплой (обновление сайта)

Запуши изменения в `main` и выполни ту же команду:

```bash
git push origin main
ansible-playbook -i ansible/inventory/hosts.ini ansible/deploy.yml
```

Ansible подтянет новые коммиты, пересоберёт `dist/` и перезагрузит Nginx.
Сертификат повторно не запрашивается.

---

## Сосуществование с другими сайтами

Плейбук безопасен при наличии других сайтов на том же VPS:

- Создаёт только свой файл `/etc/nginx/sites-available/savadanko`
- Удаляет дефолтный nginx-сайт **только если он единственный** в `sites-enabled` (чистый VPS)
- Certbot использует режим `--webroot` — не редактирует чужие конфиги Nginx
- Единственное условие: у других сайтов не должно быть `server_name dankosava.ru`

---

## Переменные окружения

Переменные сборки описаны в `.env.production.example`. При деплое через Ansible
`.env.production` генерируется автоматически из `group_vars/vps.yml`.

Для локальной сборки:

```bash
cp .env.production.example .env.production
# отредактировать при необходимости
npm run build
```

| Переменная             | Описание                        | Дефолт                  |
|------------------------|---------------------------------|-------------------------|
| `VITE_SITE_NAME`       | Имя сайта                       | `Savely Danko`          |
| `VITE_SITE_TITLE`      | Title в `<head>`                | `Savely Danko`          |
| `VITE_SITE_DESCRIPTION`| Description для SEO             | текст из `site.ts`      |
| `VITE_SITE_URL`        | Канонический URL (нужен для SEO)| `https://example.com`   |

---

## Диагностика

```bash
# Статус Nginx
ssh root@<IP> "systemctl status nginx"

# Логи Nginx
ssh root@<IP> "tail -50 /var/log/nginx/error.log"

# Проверить конфиг Nginx
ssh root@<IP> "nginx -t"

# Статус сертификата
ssh root@<IP> "certbot certificates"

# Тест продления сертификата
ssh root@<IP> "certbot renew --dry-run"

# Статус admin backend
ssh root@<IP> "systemctl status savadanko-admin"

# Логи admin backend
ssh root@<IP> "journalctl -u savadanko-admin -n 50 --no-pager"

# Перезапуск admin backend
ssh root@<IP> "systemctl restart savadanko-admin"
```
