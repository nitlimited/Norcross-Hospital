FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.29-alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN printf '%s\n' \
  'server {' \
  '    listen 80;' \
  '    server_name _;' \
  '' \
  '    root /usr/share/nginx/html;' \
  '    index index.html;' \
  '' \
  '    location / {' \
  '        try_files $uri $uri/ /index.html;' \
  '    }' \
  '' \
  '    location ~* \.(?:css|js|mjs|json|svg|ico|png|jpg|jpeg|gif|webp|avif|woff2?)$ {' \
  '        try_files $uri =404;' \
  '        access_log off;' \
  '        expires 30d;' \
  '        add_header Cache-Control "public, max-age=2592000, immutable";' \
  '    }' \
  '}' \
  > /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
