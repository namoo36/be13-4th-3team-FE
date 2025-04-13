# 스프링 부트 프로젝트를 도커 이미지로 만들기 위한 설정
FROM eclipse-temurin:21-jre-alpine
LABEL maintainer="namoo36 wldnrkwhr36@naver.com"
LABEL version="1.0"
COPY dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
ARG BUILD_PORT=81
ENV TZ=Asia/Seoul
EXPOSE ${BUILD_PORT}
CMD ["nginx", "-g", "daemon off;"]