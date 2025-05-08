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
  
  # Notes

  This backend is full dockerized as mentioned, it doesn't have any DB hooked up but we do define a service in the docker compose, I normally use liquibase to manage my DB changes but have used Alembic in the past as well. In the case of if we created a auth endpoint it differs on which route we'd want to take e.g server-side managed JWT or a provider like Descope, in the case of we managing the jwt, we'd just sign it with a secret and we'd sign the JWT and pass it back to the client once we have performed the checksum of the hash in the password col in the users table ( for an example ) true = we issue a token that expires in X hours, false = they dont get a toke, token will be included in the cookies and we'd extract it from the request to validate its signature authenticity. In the case of Descope we would have a project ID and they would do the validation for us. Ideally all our endpoints asides from opur /status and login would be protected, potentially a few others. Includes the status endpoint in here for sanity checks but also many services like AWS app-runner require it for health checks and since the boilerplate of this app is running on a aws-server now I just left it in as a util. 
  
