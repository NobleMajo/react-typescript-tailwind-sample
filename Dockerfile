FROM nginx:1.21

COPY nginx.conf /etc/nginx/
COPY dist /usr/share/nginx/html/