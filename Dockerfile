FROM node:22.12-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --omit=dev --ignore-scripts

COPY build ./build

EXPOSE 3000

CMD ["node", "build"]
