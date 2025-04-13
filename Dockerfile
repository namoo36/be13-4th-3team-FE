# Step 1: Vue.js 프로젝트를 빌드하는 Node.js 이미지
FROM nginx:latest

# Vue.js 빌드 결과물 복사
COPY dist /usr/share/nginx/html

# Nginx 설정 파일 복사 (필요시)
COPY default.conf /etc/nginx/conf.d/default.conf

# 환경 변수 및 포트 설정
ARG BUILD_PORT=81
ENV TZ=Asia/Seoul
EXPOSE ${BUILD_PORT}

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
