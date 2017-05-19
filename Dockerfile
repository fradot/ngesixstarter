from node:boron

MAINTAINER fradot

WORKDIR "/opt"

RUN apt-get update
RUN npm install -g gulp
RUN npm install -g bower

VOLUME ["/opt"]
CMD ["gulp"]
