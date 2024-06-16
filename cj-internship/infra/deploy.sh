#!/bin/bash

# Vue.js 프로젝트 디렉터리로 이동
cd frontend

# 빌드
npm run build

# Terraform이 생성한 버킷 이름을 가져옴
BUCKET_NAME=$(terraform output -raw vue_bucket_name)

# S3에 파일 업로드
aws s3 sync dist/ s3://$BUCKET_NAME --delete
