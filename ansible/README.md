# Ansible Deploy

Деплоит сайт на VPS: клонирует репо, собирает `dist/`, настраивает Nginx.

## Структура

```
ansible/
├── deploy.yml               # Основной плейбук
├── inventory/
│   └── hosts.ini            # Адрес сервера и SSH-настройки
├── group_vars/
│   └── vps.yml              # Переменные (домен, ветка, SSL)
└── roles/webapp/
    ├── tasks/main.yml       # Шаги деплоя
    ├── handlers/main.yml    # Reload nginx
    └── templates/nginx.conf.j2
```

## Быстрый старт

1. Укажи IP сервера в `inventory/hosts.ini`:
   ```ini
   your_server_ip ansible_user=root ansible_ssh_private_key_file=~/.ssh/id_rsa
   ```

2. Проверь переменные в `group_vars/vps.yml` (домен, ветка).

3. Запусти деплой:
   ```bash
   ansible-playbook -i inventory/hosts.ini deploy.yml
   ```

4. Для HTTPS установи `enable_ssl: true` в `group_vars/vps.yml` и убедись,
   что DNS домена указывает на сервер.

## Повторный деплой (новый коммит)

Та же команда — Ansible подтянет изменения из git и пересоберёт:
```bash
ansible-playbook -i inventory/hosts.ini deploy.yml
```
