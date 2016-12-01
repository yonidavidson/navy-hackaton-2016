#!/bin/bash
while true ; do
if [ -f ./lock ]
  then
    export FIRST_TIME="false"
   else
    export FIRST_TIME="true"
fi
    echo ""
    node recognize.js
done