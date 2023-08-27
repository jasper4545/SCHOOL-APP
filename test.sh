#!/bin/bash

URL="http://localhost:9001/api/v1/users/login"
CONCURRENT_REQUESTS=10
TOTAL_REQUESTS=100

for ((i=1; i<=$TOTAL_REQUESTS; i++)); do
    echo "Sending request $i"
    curl -s $URL &
    if ((i % $CONCURRENT_REQUESTS == 0)); then
        wait
    fi
done
