#!/bin/bash
docker cp backup.gz rocketchat-platform-mongodb-1:/$1

docker exec -it rocketchat-platform-mongodb-1 \
  mongorestore --archive=/$1 --drop
