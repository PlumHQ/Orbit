FROM node:22.18.0

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./

# Copy source files and configuration
COPY .storybook ./.storybook
COPY design-system-test ./design-system-test
COPY src ./src
COPY tsconfig*.json ./
COPY vite.config.ts ./
# COPY postcss.config.js ./
# COPY tailwind.config.js ./
RUN npm ci

# Build Storybook for production
RUN npm run build-storybook

# Install a simple HTTP server for static files
RUN npm install -g http-server

# Expose port 6006 for production  
EXPOSE 6006

# Serve static build with CORS support
CMD ["http-server", "storybook-static", "-p", "6006", "--cors", "-a", "0.0.0.0"]