# Étape 1 : Build Angular
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# VÉRIFICATION : Voir la structure exacte
RUN echo "=== STRUCTURE COMPLÈTE ==="
RUN find /app/dist -type f -name "*.html" | head -10

# Étape 2 : Serveur NGINX
FROM nginx:1.25-alpine

# COPIER LES FICHIERS DU SOUS-DOSSIER browser/
COPY --from=build /app/dist/demoapp/browser /usr/share/nginx/html

# VÉRIFICATION
RUN echo "=== CONTENU FINAL DANS NGINX ==="
RUN ls -la /usr/share/nginx/html/

# Configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]