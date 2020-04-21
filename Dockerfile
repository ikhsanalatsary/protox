FROM node:12-alpine3.11

WORKDIR /var/www

COPY . /var/www

RUN npm install

EXPOSE 50051

CMD ["npm", "run", "start:server", "true"]