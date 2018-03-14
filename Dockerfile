FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 1234 38139
CMD ["npm", "start"]