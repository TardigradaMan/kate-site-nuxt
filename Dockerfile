FROM node:14-slim

ENV APP_ROOT /usr/src/app-nuxt

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]

ENV HOST 0.0.0.0
