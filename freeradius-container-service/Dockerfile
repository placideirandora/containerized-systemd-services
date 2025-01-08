ARG DOCKERHUB_USERNAME
FROM ${DOCKERHUB_USERNAME}/freerad-base:main-multi-arch

# Expose RADIUS ports
EXPOSE 1812/udp 1813/udp

# Copy configuration files
COPY ./raddb /etc/freeradius/3.0

RUN chown -R freerad:freerad /etc/freeradius

# Start FreeRADIUS
ENTRYPOINT ["/usr/sbin/freeradius", "-X"]
