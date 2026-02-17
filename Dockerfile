FROM node:18-alpine

ENV NODE_ENV=production
WORKDIR /app

# Copy package files first for better cache usage
COPY package.json pnpm-lock.yaml* ./

# Install dependencies. If pnpm lockfile exists, install pnpm and use it.
RUN if [ -f pnpm-lock.yaml ]; then \
      npm install -g pnpm && pnpm install --prod; \
    else \
      npm install --production; \
    fi

# Copy app source
COPY . .

# Default port (can be overridden by Easypanel env)
EXPOSE 3000
ENV PORT=3000

CMD ["node", "index.js"]
