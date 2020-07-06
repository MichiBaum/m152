### STAGE 1: Build ###
FROM node:13.10.1-alpine AS BUILD
MAINTAINER Michael Baumberger
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install npm@latest -g
RUN npm install
COPY . .
RUN npm run build -- --prod --output-hashing=all

### STAGE 2: Run ###
FROM nginx:1.17.10-alpine
MAINTAINER Michael Baumberger
RUN rm -r /usr/share/nginx/html && \
    rm -f /var/log/nginx/* && \
    mkdir /usr/share/nginx/html/ && \
    rm /etc/nginx/conf.d/default.conf
COPY --from=BUILD /usr/src/app/dist/m152 /usr/share/nginx/html/m152
RUN apk add --update \
    curl \
    && rm -rf /var/cache/apk/*
COPY ./default.conf /etc/nginx/conf.d/default.conf