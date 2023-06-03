FROM mcr.microsoft.com/devcontainers/javascript-node:0-16

WORKDIR /usr/app
COPY ./ /usr/app

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git
RUN npm install
