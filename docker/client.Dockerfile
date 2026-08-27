FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY packages ./packages
COPY client ./client

RUN npm install
RUN npm run build --workspace=packages/types
RUN npm run build --workspace=client

FROM nginx:alpine AS runner

COPY --from=builder /app/client/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
