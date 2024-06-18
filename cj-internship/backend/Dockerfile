# Base image
FROM node:18-alpine

WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]