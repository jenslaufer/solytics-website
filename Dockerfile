# build stage
FROM node:22-alpine AS build

WORKDIR /app
COPY . .

RUN npm install -D vite && npm run build 

# production stage
FROM nginx:stable-alpine AS production-stage
COPY --from=build /app/dist/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]