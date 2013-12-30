#!/bin/bash
./cloc-1.60.pl --exclude-dir=./public/js/lib,./public/css,./public/build,./node_modules --exclude-ext=pl,sh,bat --not-match-f='^backend.min.js','^minify.js'  ./
