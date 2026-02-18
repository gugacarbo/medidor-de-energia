FROM node:lts-alpine3.22

ENV NODE_ENV=production
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files first for better cache usage
COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --frozen-lockfile 

# Copy app source
COPY . .

# Default port (can be overridden by Easypanel env)
EXPOSE 3000
ENV PORT=3000

CMD ["node", "index.js"]
