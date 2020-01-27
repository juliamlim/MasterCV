FROM node:10

COPY . .

RUN npm install

RUN npx prisma2 generate

RUN npm run build

EXPOSE 8080

CMD [ "node", "./dist/src/index.js" ]
