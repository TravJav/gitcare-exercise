#!/bin/bash
# To start backend 

sudo kill -9 $(sudo lsof -t -i:4320)

sudo ts-node routes/main.ts
# sudo pm2 start ts-node routes/main.ts --watch -f