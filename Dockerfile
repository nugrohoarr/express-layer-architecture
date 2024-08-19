# Use the official Node.js 18.17.0 Alpine base image
FROM node:18.17.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Install MySQL client
RUN apk --no-cache add mysql-client

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]