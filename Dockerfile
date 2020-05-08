FROM node:14.1-alpine

RUN mkdir -p /app
RUN chown -R node:node /app
WORKDIR /app

RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*

# Install app dependencies
COPY package*.json ./
USER node
RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
