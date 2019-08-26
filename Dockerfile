FROM node:11
WORKDIR /app
COPY gcp-key.json ./
ENV GOOGLE_APPLICATION_CREDENTIALS /app/gcp-key.json
COPY package.json package-lock.json ./
RUN npm install
COPY chat.js ./
