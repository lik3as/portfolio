FROM node:20.10.0 as build

ENV TZ=Brazil/East
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/www/

COPY package.json .
COPY yarn.lock .

RUN yarn
COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=build /usr/www/dist/ /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d/* /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
