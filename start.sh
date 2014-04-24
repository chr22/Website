#!/bin/bash
rm nohup.out
nohup mongod &
sleep 2s
export NODE_ENV=production && nohup node server.js &
echo $! > website.pid
