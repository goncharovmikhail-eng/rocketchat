#!/bin/bash
docker compose exec mongodb mkdir -p /bitnami/mongodb/backup

docker compose exec mongodb mongodump --archive=/bitnami/mongodb/backup/backup.gz

docker cp $(docker compose ps -q mongodb):/bitnami/mongodb/backup/backup.gz ./backup.gz
