FROM node:alpine as builder
WORKDIR /app
COPY . ./

ARG API_URL_ARG
ENV REACT_APP_API_URL=$API_URL_ARG

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]


# FROM node:alpine as builder
# WORKDIR /app
# COPY . ./
# RUN npm install
# RUN npm install react-scripts@3.4.0 -g
# EXPOSE 3000
# CMD ["npm", "start"]




