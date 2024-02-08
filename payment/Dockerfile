FROM node:16.14-alpine

# Specify where our app will live in the container
WORKDIR /app


# install app dependencies
COPY package.json .
# COPY npm.lock .
RUN npm install

# add app
COPY . .

# start app
RUN npm start


EXPOSE 3000

CMD ["npm", "start"]

