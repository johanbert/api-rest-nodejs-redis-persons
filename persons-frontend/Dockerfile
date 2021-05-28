FROM node:14
WORKDIR /app
COPY ./persons-frontend/package.json /app
RUN npm i
RUN npm install -g npm@7.15.0
RUN npm install -g @angular/cli

COPY ./persons-frontend/ /app
CMD ng serve --host 0.0.0.0 --disable-host-check
