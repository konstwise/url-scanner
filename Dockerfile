FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY tsconfig.json ./
COPY index.ts ./

# copy source code to /app/src folder
COPY ./src ./src

# check files list
RUN ls -a

RUN npm install
RUN npm run build_once

RUN ls ./dist -a

RUN ls ../ -a

# Start
CMD [ "node", "./dist/index.js" ]
EXPOSE 3000
