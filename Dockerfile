FROM node:lts-alpine3.22

ENV NODE_ENV=production
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

# Enable pnpm using Corepack (built-in with Node.js)
RUN corepack enable

# Copy package files first for better cache usage
COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

# Copy app source
COPY . .

# Build TypeScript
RUN pnpm run build

# Remove dev dependencies
RUN pnpm prune --prod

# Default port (can be overridden by Easypanel env)
EXPOSE 3000
ENV PORT=3000

CMD ["node", "dist/index.js"]
