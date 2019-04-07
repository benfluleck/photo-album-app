FROM node:10-stretch as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build:client-prod

FROM nginx:1.15.2-alpine

LABEL author="Benny Ogidan"

COPY ./client/dist /var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
