#!/bin/bash

# install the Google Cloud SDK
curl https://sdk.cloud.google.com | bash
if [ $? -eq 1 ]; then
  echo "Could not install the Google Cloud SDK"
  exit 1
fi

# refresh your bash
source ~/.bash_profile

# initialize the Google Cloud SDK
gcloud init
if [ $? -eq 1 ]; then
  echo "Could not initialize the Google Cloud SDK"
  exit 1
fi

# install the python extras
gcloud components install app-engine-python-extras

# refresh your bash
source ~/.bash_profile

# install the app-engine-python component for the Google Cloud SDK
gcloud components install app-engine-python
if [ $? -eq 1 ]; then
  echo "Could not install the app-engine-python Google Cloud SDK component"
  exit 1
fi

# fail if ruby is not installed
if ! ruby --version; then
    echo ERROR: Ruby is not installed on this machine. Please install ruby manually before you proceed
    exit 1
fi

# install xcode-select a depenedency of homebrew
xcode-select --install

# install homebrew
if ! brew --version; then
    echo Brew was not found on this machine, installing...
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

# install node
if ! npm --version; then
    echo npm was not found on this machine, installing...
    brew install node
fi

# Install nvm if it isn't already installed
if ! command -v nvm; then
    echo "nvm was not found, installing..."
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
fi

node_version="10.5.0"

# Install the latest possible node version
nvm install $node_version

# Set the latest possile node version to be the default version
nvm alias default $node_version

nvm use $node_version

# Install the polymer cli
npm install -g polymer-cli

# Install yarn
brew install yarn --without-node

# install imagemagick and graphicsmagick
brew install imagemagick
brew install graphicsmagick

# install all npm components with yarn
yarn install

# refresh your bash
source ~/.bash_profile

# add a symlink for appcfg.py
ln -sv /google-cloud-sdk/platform/google_appengine/appcfg.py /google-cloud-sdk/bin/

# install pip
sudo easy_install pip

# install lxml
sudo easy_install lxml

# install pycrypto
sudo pip install pycrypto

# install Pillow
sudo pip install Pillow

# install pycodestyle
sudo pip install flake8

# link and run the local instance
npm start
