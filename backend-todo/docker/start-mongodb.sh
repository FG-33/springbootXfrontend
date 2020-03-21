#!/bin/bash

# start/create container
sudo docker run -d -p 27017-27019:27017-27019 --name sbxf-mongoDB mongo:latest

if [[ $? -eq 0 ]]; then
    echo ""
else
    echo ""
    echo "--- start existing container ---"
    echo ""
    # start the container in subsequent script executions
    sudo docker container start sbxf-mongoDB
fi