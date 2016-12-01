#!/bin/bash
while true ; do
    echo "start server"
    node recognize.js
    echo "Server 'myserver' crashed with exit code $?.  Respawning.." >&2
    sleep 1
done