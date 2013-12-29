#!/bin/bash
nohup node app.js &
echo $! > website.pid