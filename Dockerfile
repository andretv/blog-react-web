FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 1234 39321
CMD ["npm", "start"]