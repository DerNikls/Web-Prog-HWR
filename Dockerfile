FROM ubuntu:latest

LABEL authors="Niklas Täge"

FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]