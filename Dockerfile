FROM node:16-alpine3.12
WORKDIR /usr/app
COPY /src/package*.json /usr/app
RUN npm i && npm cache clean --force
COPY /src /usr/app
EXPOSE 3000
CMD ["npm", "run", "dev"]