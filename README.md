# QuizProject Deployment

This repository contains a Spring Boot backend and React frontend packaged with Docker and orchestrated via `docker-compose`.

## Environment
All configuration is stored in a single `.env` file at the root. Do **not** commit this file with secrets.

```env
# database
SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/qsdb
SPRING_DATASOURCE_USERNAME=root
SPRING_DATASOURCE_PASSWORD=secure_password_123
MYSQL_ROOT_PASSWORD=secure_password_123
MYSQL_DATABASE=qsdb
MYSQL_ROOT_HOST=%

# frontend/backed API
REACT_APP_API_BASE_URL=http://localhost:8080  # development
# REACT_APP_API_BASE_URL=https://api.domain.com  # production

# mail settings (example values shown)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=awwnishuwu@gmail.com
MAIL_PASSWORD=ymuk kdhg kfgl xutz
MAIL_SMTP_AUTH=true
MAIL_SMTP_STARTTLS_ENABLE=true
MAIL_DEBUG=false
MAIL_LOG_LEVEL=INFO
APP_LOG_LEVEL=INFO

# override ports for local testing
FRONTEND_PORT=80
BACKEND_PORT=8080
```

## Building & Running Locally
```bash
# ensure Docker Desktop running on Windows or Linux
cd /path/to/QuizProject
# rebuild images if you changed code
docker-compose up -d --build
# view logs
docker-compose logs -f
```

Frontend will be available at `http://localhost:${FRONTEND_PORT}` and backend at `http://localhost:${BACKEND_PORT}`. To test from another machine, change the host port variables or access via the host's IP address (e.g. `http://192.168.x.y:80`).

## Production Notes
- Set `REACT_APP_API_BASE_URL` to your backend subdomain (e.g. `https://api.domain.com`).
- Use nginx/letsencrypt on the server to reverse-proxy:
  - `domain.com` → frontend container port 80
  - `api.domain.com` → backend container port 8080
- Secure secrets using Docker secrets, environment variables, or vault.

## Dockerfile Improvements
- Backend uses multi-stage build and runs as non-root user.
- Frontend uses multi-stage build with nginx and includes custom `nginx.conf` (gzip, headers).

## Troubleshooting
- **MySQL restart loop**: reset volume and ensure `MYSQL_ROOT_HOST=%` in `.env`.
- **Backend unhealthy**: check container logs, health check now uses `nc` to verify port 8080.
- **Frontend restart loop**: was due to invalid `must-revalidate` directive in `nginx.conf` (fixed).

----
Feel free to adjust ports and domains in `.env` depending on your host environment.  

Happy coding! 🚀