FROM node:alpine

COPY ./build /app
COPY ./package*.json /app/

WORKDIR /app

RUN npm ci --production

ENTRYPOINT [ "node" ]

CMD [ "/app/index.js" ]
