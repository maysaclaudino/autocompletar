FROM node:20.15.1-alpine

WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]

EXPOSE 3000