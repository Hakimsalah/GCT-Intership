# Étape 1 : Build Angular
FROM node:18-alpine AS build
WORKDIR /app

# Copier les fichiers package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le code source et build
COPY . .
RUN npm run build --prod

# VÉRIFICATION : Voir ce qui est buildé
RUN echo "=== CONTENU DU BUILD ANGULAR ==="
RUN ls -la /app/dist/
RUN ls -la /app/dist/demoapp/

# Étape 2 : Serveur NGINX
FROM nginx:1.25-alpine

# COPIER LES FICHIERS ANGULAR DANS NGINX
COPY --from=build /app/dist/demoapp /usr/share/nginx/html

# VÉRIFICATION : Voir ce qui est copié
RUN echo "=== CONTENU DANS NGINX ==="
RUN ls -la /usr/share/nginx/html/

# Configuration Nginx pour Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]