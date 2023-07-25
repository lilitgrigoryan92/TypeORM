FROM node

WORKDIR /index

COPY package*.json ./
COPY dist/ ./dist

RUN npm install


CMD ["node", "dist/index.js"]
