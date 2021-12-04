FROM node:14
RUN mkdir -p /home/app
WORKDIR /home/app
COPY package*.json .
USER node
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]