FROM node:16-alpine3.12
WORKDIR /usr/app
COPY /app/package.json ./
RUN npm install
COPY /app .
EXPOSE 3000
CMD ["npm", "run", "start"]