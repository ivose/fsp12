# Task 12.5
FROM node:alpine
USER node
EXPOSE 3000
WORKDIR /usr/src/app
COPY --chown=node:node . .
ENV DEBUG=playground:*
RUN npm ci
CMD npm start

# docker build -t todo-backend . && docker run -p 3000:3000 todo-backend


