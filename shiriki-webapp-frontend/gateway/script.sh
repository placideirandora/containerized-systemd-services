#!/bin/bash

# Refer to the docker-compose.yml file for what's happening here

# Ensure BalenaEngine is running
balena-engine version || {
    echo "BalenaEngine is not installed or running. Exiting."
    exit 1
}

# Create the required network for APISIX
balena-engine network create apisix || echo "Network 'apisix' already exists."

# Run the Apache APISIX service
balena-engine run -d --name apisix \
    --restart always \
    --network apisix \
    -p 9180:9180 \
    -p 9080:9080 \
    -p 9091:9091 \
    -p 9443:9443 \
    -p 9092:9092 \
    -v $(pwd)/apisix-standalone.yaml:/usr/local/apisix/conf/apisix.yaml:ro \
    -e APISIX_STAND_ALONE=true \
    apache/apisix:${APISIX_IMAGE_TAG:-3.11.0-debian}

# Run the super-web-app service
balena-engine run -d --name super-web-app \
    --restart always \
    --network apisix \
    -p 9000:80 \
    us-central1-docker.pkg.dev/m-shirki/super-web-app/super-web-app:amd64

# Run the test1 service (nginx)
balena-engine run -d --name test1 \
    --restart always \
    --network apisix \
    -p 9081:80 \
    -v $(pwd)/upstream/test1.conf:/etc/nginx/nginx.conf \
    -e NGINX_PORT=80 \
    nginx:1.19.0-alpine

# Run the test2 service (nginx)
balena-engine run -d --name test2 \
    --restart always \
    --network apisix \
    -p 9082:80 \
    -v $(pwd)/upstream/test2.conf:/etc/nginx/nginx.conf \
    -e NGINX_PORT=80 \
    nginx:1.19.0-alpine

echo "All services are now running."
