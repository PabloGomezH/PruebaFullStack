# Usar una imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install && npm install -g nodemon 

# Copiar el resto del código
COPY . .

# Exponer el puerto en el que correrá el backend
EXPOSE 3001

# Comando para ejecutar la aplicación con nodemon (para que los cambios se reflejen automáticamente)
CMD ["npm", "run", "dev"]