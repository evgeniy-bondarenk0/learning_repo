FROM node:16-alpine
WORKDIR /usr/src/task-11
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
