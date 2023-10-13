FROM node:18.18.1

USER root

RUN apt update

ENV PORT=8081

EXPOSE 8081

WORKDIR /app

COPY package.json /app/package.json

RUN npm i

COPY . .

CMD [ "npm", "run", "dev" ]