FROM node:10-alpine

COPY public /app
COPY dist /app
COPY package.json /app

WORKDIR /app

RUN npm install

ENTRYPOINT [ "node", "main.js" ]