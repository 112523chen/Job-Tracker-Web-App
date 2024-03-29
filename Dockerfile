FROM node:19.5.0-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY ./client .

EXPOSE 5173

CMD ["npm", "run", "dev"]