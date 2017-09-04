FROM node:7.8.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn install

COPY . /usr/src/app

ENTRYPOINT [ "yarn" ]
CMD [ "test" ]