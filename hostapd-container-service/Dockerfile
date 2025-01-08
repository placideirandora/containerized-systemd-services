# Dockerfile
ARG DOCKERHUB_USERNAME
FROM --platform=$TARGETPLATFORM $DOCKERHUB_USERNAME/hostapd-base:main-multi-arch

COPY ./hostapd.conf /etc

CMD ["hostapd", "-d", "/etc/hostapd.conf"]