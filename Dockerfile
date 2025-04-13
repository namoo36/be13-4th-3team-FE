# Step 1: Vue.js 프로젝트를 빌드하는 Node.js 이미지
FROM node:18-alpine AS build

# 작업 디렉토리 설정
WORKDIR /app

# 프론트엔드 소스 코드 복사
COPY . .

# 의존성 설치
RUN npm install

# Vue.js 빌드 (빌드 결과물이 /dist 폴더에 생성됩니다)
RUN npm run build

# Step 2: Nginx로 빌드된 결과물을 서빙
FROM nginx:alpine

# Vue.js 빌드 결과물 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 설정 파일 복사 (필요시)
COPY default.conf /etc/nginx/conf.d/default.conf

# 환경 변수 및 포트 설정
ARG BUILD_PORT=81
ENV TZ=Asia/Seoul
EXPOSE ${BUILD_PORT}

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
