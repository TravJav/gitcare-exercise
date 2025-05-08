# API backend

The scaffolding of this project comes from my own app I created running on a AWS app-runner
I used this to speed up development time. https://github.com/TravJav/MainBackend ( owned by myself )

## Swagger / Opean API  openapi.yaml


## Building the docker image and getting Started

You will need Docker on your system.

- run .
bash ```
/build_container.sh 
```
OR

bash ```
 npm run run-local
```

## to enter the container do this

docker exec -it container_id sh

## Docker Logs location(s)

with the docker logs command you can list the logs for a particular container.
```bash
docker ps
docker logs <container_id>
```

to get the container id use docker ps <CONTAINER ID>

## Logging into docker container
```bash
docker exec -it <hash> bash
```


# Locally in your project.
npm install -D typescript
npm install -D ts-node

run the project like this after uncomments thing ports in the docker-compose
node ./node_modules/nodemon/bin/nodemon.js --exec ts-node routes/main.ts


## Local env specifics globally with TypeScript.
npm install -g typescript
npm install -g ts-node
Tip: Installing modules locally allows you to control and share the versions through package.json. TS Node will always resolve the compiler from cwd before checking relative to its own installation.


## Testing API

run curl http://localhost:4320/status/api

expected Response is: `{"message":"Server is running as expected. Only user authenticated requests are permitted","status":true,"title":"Alive"}%`

### Test credit card validation endpoint manually
```bash
curl -X POST http://localhost:4320/payments/validate/card \
  -H "Content-Type: application/json" \
  -d '{"cardNumber": "4111111111111111"}'
  ```


 ## Test with Jest

  in root project dir

bash ```
  npx jest 
```
  
  
