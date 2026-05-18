# Гайд по деплою

Сайт деплоится на VPS через Ansible: репозиторий клонируется на сервер,
собирается `dist/`, Nginx раздаёт статику, Certbot выпускает SSL-сертификат.

---

## Требования

На локальной машине:
- `ansible` ≥ 2.14 — `pip install ansible`
- SSH-ключ, добавленный на сервер

На VPS:
- Ubuntu 22.04 / 24.04
- Открытые порты **80** и **443**
- DNS-записи `dankosava.ru` и `www.dankosava.ru` указывают на IP сервера

---

## Первый деплой

### 1. Указать IP сервера

Открыть `ansible/inventory/hosts.ini` и заменить `your_server_ip`:

```ini
[vps]
1.2.3.4 ansible_user=root ansible_ssh_private_key_file=~/.ssh/id_rsa
```

Если пользователь не `root`, поменяй `ansible_user` и убедись, что у него есть `sudo`.

### 2. Проверить переменные

`ansible/group_vars/vps.yml` — всё уже настроено для `dankosava.ru`:

```yaml
domain: dankosava.ru
repo_url: https://github.com/SaveliyDanko/savadanko-web.git
repo_branch: main
enable_ssl: true
certbot_email: dankosaveliy.m@gmail.com
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
3. `npm ci && npm run build`
4. Настройку Nginx с редиректом HTTP → HTTPS
5. Выпуск SSL-сертификата через Let's Encrypt
6. Включение автопродления сертификата (systemd timer)

После завершения сайт доступен по адресу **https://dankosava.ru**.

---

## Повторный деплой (обновление сайта)

Запуши изменения в `main` и выполни ту же команду:

```bash
git push origin main
ansible-playbook -i ansible/inventory/hosts.ini ansible/deploy.yml
```

Ansible подтянет новые коммиты, пересоберёт `dist/` и перезагрузит Nginx.
Сертификат повторно не запрашивается — Certbot проверит и при необходимости продлит.

---

## Сосуществование с другими сайтами на том же VPS

Плейбук **не трогает** чужие конфиги Nginx:

- Создаёт только свой файл `/etc/nginx/sites-available/savadanko` и симлинк в `sites-enabled/`
- **Не удаляет** `default` и другие сайты
- Certbot использует режим `--webroot` (не `--nginx`), поэтому он не редактирует никакие конфиги Nginx самостоятельно

Единственное условие — у других сайтов не должно быть `server_name dankosava.ru` или `server_name www.dankosava.ru` в их конфигах, иначе Nginx выберет один из них непредсказуемо.

---

## Диагностика

### Проверить статус Nginx

```bash
ssh root@<IP> "systemctl status nginx"
```

### Посмотреть логи Nginx

```bash
ssh root@<IP> "tail -50 /var/log/nginx/error.log"
```

### Проверить сертификат

```bash
ssh root@<IP> "certbot certificates"
```

### Ручное продление сертификата

```bash
ssh root@<IP> "certbot renew --dry-run"
```

### Проверить конфиг Nginx

```bash
ssh root@<IP> "nginx -t"
```

---

## Структура Ansible-проекта

```
ansible/
├── deploy.yml                        # Точка входа
├── inventory/
│   └── hosts.ini                     # IP сервера и SSH-настройки
├── group_vars/
│   └── vps.yml                       # Домен, ветка, SSL
└── roles/webapp/
    ├── tasks/main.yml                # Шаги деплоя
    ├── handlers/main.yml             # Reload nginx
    ├── templates/nginx-http.conf.j2  # Временный HTTP-конфиг для ACME-challenge
    └── templates/nginx.conf.j2      # Финальный конфиг: HTTP→HTTPS, SPA, gzip, HSTS
```
