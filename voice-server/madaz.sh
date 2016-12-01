#!/bin/bash
if [ -f ./lock ]
  then
    exit 0
   else
    touch ./lock
    xdg-open ./resources/AUD-20161201-WA0020.amr
fi
  

