FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /app

USER node

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
