#!/bin/bash
rm nohup.out
nohup node app.js &
echo $! > website.pid