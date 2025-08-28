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

# Install serve for static file serving
RUN npm install -g serve

# Expose port 6006 for production
EXPOSE 6006

# Serve static build with CORS support
CMD ["serve", "-s", "storybook-static", "-l", "6006", "--cors"]