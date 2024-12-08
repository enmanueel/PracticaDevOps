
# Usar la imagen oficial de Nginx
FROM nginx:latest

# Copiar el archivo index.html al directorio predeterminado de Nginx
COPY ./index.html /usr/share/nginx/html/index.html
