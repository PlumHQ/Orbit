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

# Create non-root user for security
RUN groupadd -g 1001 nodejs && \
    useradd -r -u 1001 -g nodejs nodejs

# Change ownership of the app directory
RUN chown -R nodejs:nodejs /usr/src/app
USER nodejs

# Expose port 6006 (standard Storybook port)
EXPOSE 6006

# Serve the static build with CORS on port 6006
CMD ["serve", "-s", "storybook-static", "-l", "6006", "--cors"]