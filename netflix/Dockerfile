#base image
FROM node:16.13.2

RUN mkdir -p /usr/app/
WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

#copy from to
COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
