# Dockerfile
# # Use official Node.js image as the base image
# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose the port the app runs on
# EXPOSE 3000

# # Command to run the app
# CMD ["npm", "start"]

# .dockerignore 파일 작성
# node_modules
# npm-debug.log

# docker build -t my-express-app .
# docker run -p 3000:3000 my-express-app
# http://localhost:3000

# ec2 생성
#   키페어
#   네트워크 디폴트

# ec2 접속
#   도커 설치
#   sudo docker pull your-dockerhub-username/my-express-app
#   sudo docker run -d -p 80:3000 your-dockerhub-username/my-express-app

# docker-compose.yml
# version: '3'
# services:
#   web:
#     image: your-dockerhub-username/my-express-app
#     ports:
#       - "80:3000"
# sudo docker-compose up -d
# http://your-ec2-public-dns


# 네트워크 설정
#   보안그룹 > TCP express 포트 번호