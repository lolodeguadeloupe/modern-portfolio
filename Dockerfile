FROM node:18 AS build
WORKDIR /app

# Copiez tout le projet
COPY . .

# Installez les dépendances
RUN npm install

# Lancez le build
RUN npm run build

# Production
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Ajoutez la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiez les certificats SSL
COPY certs /etc/nginx/certs