# Étape de build
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape de production
FROM nginx:alpine
COPY --from=build-stage /app/dist/demoapp /usr/share/nginx/html
# OU selon le nom de votre projet Angular :
# COPY --from=build-stage /app/dist/votre-nom-projet /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]