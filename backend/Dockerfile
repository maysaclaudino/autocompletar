FROM node:20.15.1-alpine

WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]

EXPOSE 4000