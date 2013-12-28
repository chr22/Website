#!/bin/bash
./cloc-1.60.pl --exclude-dir=./public/js/lib,./public/css,./node_modules --exclude-ext=pl,sh,bat --not-match-f='^web-server.js','^minify.js'  ./
