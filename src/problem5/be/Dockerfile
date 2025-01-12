FROM node:22.13-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN yarn

ENV NODE_OPTIONS=--max_old_space_size=4096

CMD [ "yarn", "start" ]
