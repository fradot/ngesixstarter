from node:boron

MAINTAINER francesco Tucceri

WORKDIR "/opt"  

RUN apt-get update
RUN npm install -g gulp
RUN npm install -g bower

VOLUME ["/opt"]
CMD ["gulp"]
