FROM alpine:3.19 AS dependency-stage


WORKDIR /home/node/app

# Install required packages
RUN apk update && \
    apk upgrade && \
    apk add --no-cache vim nodejs npm


RUN npm install -g ts-node tslint typescript

RUN npm i --save-dev @types/node

# Choose a different username for the application user
RUN adduser --disabled-password --gecos '' myuser

# Change to root user temporarily
USER root

# Create the application directory and copy package files
RUN mkdir -p /home/node/app/node_modules
COPY --chown=myuser:myuser package.json ./
COPY --chown=myuser:myuser package-lock.json ./

# Change ownership of files and directories
RUN chown -R myuser:myuser /home/node/app

# Switch back to myuser
USER myuser

RUN mkdir -p /home/myuser/.npm

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY --chown=myuser:myuser . .

EXPOSE 4320

# for the server use this line below 
CMD ["ts-node", "routes/main.ts"]