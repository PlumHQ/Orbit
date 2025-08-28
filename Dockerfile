FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json .
RUN npm install

ADD . /usr/src/app
RUN rm -f .env*

# Expose the listening port
EXPOSE 8080

# Define startup command..
CMD ["npm", "start"]