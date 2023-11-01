# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . .
# COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the working directory

# Build the TypeScript code into JavaScript (generating the dist folder)
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
