# build stage
FROM node:20 AS build-stage

WORKDIR /app
COPY . .

RUN npm install -D vite && npm run build

# production stage
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]