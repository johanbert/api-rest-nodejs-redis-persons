FROM node:14
WORKDIR /app
COPY ./server/package.json /app
RUN npm i
RUN npm install -g npm@7.15.0

COPY ./server/ /app
CMD node dist/