FROM node:12 as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx
COPY --from=build-stage /usr/src/app/build/ /usr/share/nginx/html
EXPOSE 80
