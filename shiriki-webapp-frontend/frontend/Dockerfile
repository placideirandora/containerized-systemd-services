# Stage 1: Build the React app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app with a lightweight web server
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

COPY ./certs /etc/nginx/certs
COPY default.conf /etc/nginx/conf.d/
# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
