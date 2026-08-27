FROM node:20-alpine AS builder

WORKDIR /app

# Copy root configurations
COPY package*.json ./
COPY packages ./packages
COPY server ./server

# Install dependencies and build
RUN npm install
RUN npm run build --workspace=packages/types
RUN npm run build --workspace=server

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
COPY packages/types/package.json ./packages/types/
COPY packages/types/dist ./packages/types/dist
COPY server/package.json ./server/
COPY server/prisma ./server/prisma
COPY --from=builder /app/server/dist ./server/dist

RUN npm install --omit=dev

EXPOSE 5000

CMD ["node", "server/dist/server.js"]
