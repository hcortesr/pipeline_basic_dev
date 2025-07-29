FROM node:22-alpine3.22

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "test"]