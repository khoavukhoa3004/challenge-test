#!/bin/sh

docker stop be-1 || true;
docker rm be-1 || true;
docker build --tag be-1 -f Dockerfile .;

docker run --name be-1 -d --net=postgres-15-network -p 3000:3000 \
    --restart always \
    be-1;
exit;
