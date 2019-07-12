FROM node:10 as build-env
WORKDIR /app
COPY package*.json .
RUN npm install -g typescript & npm install
COPY . .
RUN npm run build

FROM node:10-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY --from=build-env /app/dist ./bin
COPY views ./views
COPY public ./public

ENTRYPOINT [ "node", "bin/main.js" ]