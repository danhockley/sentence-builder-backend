# Use the specified Node.js version for the build stage
FROM node:16.20 as build
# Set the working directory to /app
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json .
# Install dependencies for building the application
RUN npm install
# Copy the entire project files to the working directory
COPY . .
# Build the application
RUN npm run build

# Use a different Node.js version for the runtime stage
FROM node:16.20
# Set the working directory to /app
WORKDIR /app
# Copy only package.json to the working directory
COPY package.json .
# Install only production dependencies
RUN npm install --only=production
# Copy the built application from the build stage to the runtime stage
COPY --from=build /app/dist ./dist
# Command to run your application in production mode
CMD npm run start:prod
