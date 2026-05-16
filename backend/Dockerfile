# Use Node.js LTS version
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy application source
COPY . .

# Expose the port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
