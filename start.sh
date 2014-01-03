#!/bin/bash
rm nohup.out
nohup node server.js &
echo $! > website.pid