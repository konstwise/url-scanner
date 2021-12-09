FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy sources and configuration files
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY tsconfig.json ./
COPY index.ts ./
COPY jest.config.js ./

# copy source code to /app/src folder
COPY ./src ./src
COPY ./tests ./tests

# setup dependencies
RUN npm install

# run unit tests
RUN npm run test

# build
RUN npm run build


# Start
CMD [ "node", "./dist/index.js" ]
EXPOSE 3000
