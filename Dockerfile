# Stage 1: Dependencies
FROM node:22-alpine3.22 AS deps

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable \
  && corepack prepare pnpm@10.33.2 --activate \
  && pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:22-alpine3.22 AS builder

WORKDIR /app

RUN corepack enable \
  && corepack prepare pnpm@10.33.2 --activate

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN pnpm build

# Stage 3: Runner
FROM node:22-alpine3.22 AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Non-root user
RUN addgroup -S nodejs -g 1001 \
 && adduser -S nextjs -u 1001

# Standalone output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]