FROM node:8.1.4-alpine

RUN mkdir /app
WORKDIR /app
COPY . /app

EXPOSE 8000
CMD [ "node", "server.js" ]
