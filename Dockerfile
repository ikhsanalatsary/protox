FROM node:12-alpine3.11

WORKDIR /var/www

ADD . /var/www

RUN npm install && npm install request && npm rebuild

EXPOSE 50051

CMD ["npm", "run", "start:server", "true"]