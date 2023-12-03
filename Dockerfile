# Use the Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port your Nest.js app is running on
EXPOSE 8080

# Command to start the Nest.js application
CMD ["npm", "start"]
