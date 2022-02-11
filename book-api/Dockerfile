FROM node:14
RUN mkdir -p /home/app
WORKDIR /home/app
COPY book-api/package*.json ./
RUN npm install
COPY ./book-api .
EXPOSE 4000
CMD ["npm", "start"]

# FROM node:14
# RUN mkdir -p /home/app
# WORKDIR /home/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 4000
# CMD ["npm", "start"]