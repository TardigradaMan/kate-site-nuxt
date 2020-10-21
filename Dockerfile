FROM node:14-slim

ENV APP_ROOT /usr/src/app-nuxt

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}

RUN npm installsudo
RUN npm run build


EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "run", "start"]
