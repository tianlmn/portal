#!/bin/bash

message="$1"
if [ "$1" = "" ] ; then
    current=`date "+%Y-%m-%d %H:%M:%S %A"`
    message="Update At ${current}"
fi

echo $message
git add -A && git commit -m "$message" && git push

