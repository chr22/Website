#!/bin/bash
rm nohup.out
export NODE_ENV=production && nohup node server.js &
echo $! > website.pid
