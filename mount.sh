#!/usr/bin/env bash

# node_modules
[ ! -d ~/mount/reflux-starter-kit/node_modules ] && mkdir -p ~/mount/reflux-starter-kit/node_modules
[ ! -d ./node_modules ] && mkdir -p ./node_modules
sudo mount --bind ~/mount/reflux-starter-kit/node_modules ./node_modules
