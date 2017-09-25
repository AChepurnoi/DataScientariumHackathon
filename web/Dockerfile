FROM node:7.10-slim
EXPOSE 3000
ADD blagodarka blagodarka
RUN rm -rf blagodarka/node_modules
WORKDIR blagodarka
RUN npm install
CMD node server.js
