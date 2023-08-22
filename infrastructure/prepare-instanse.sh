#!/bin/sh
set -e

# Update and upgrade system packages
sudo apt update
sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install nodejs curl -y

git clone https://github.com/Ansam-02/BookManagementSystem.git app
cd app && npm install
npm run build

sudo mv ./infrastructure/app.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable app.service
sudo reboot

