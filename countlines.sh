#!/bin/bash
./cloc-1.60.pl --exclude-dir=./js/lib,./css --exclude-ext=pl,sh,bat --not-match-f='^web-server.js','^minify.js'  ./
