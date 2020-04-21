# Protox
Sample Grpc implementation in Node.JS with TypeScript and SSL Secure connection

## Instructions
- clone this repo
- install dependencies
   ```
    npm install
   ```
- generate certificate
   ```
    // for linux or mac
    npm run gen:certs-sh

    // for windows
    npm run gen:certs-bat
   ```
- Running Grpc server
   ```
    npm run start:server
   ```
- test out your server:
   ```
    npm run start:client
   ```

## Using Docker
### Build Docker image
```
  docker build -t="protox:1.0.0" .
```
### Create container
```
  docker run -d -p 50051:50051 --name protox protox:1.0.0
```
### Start
```
   docker start protox
```
### Stop
```
  docker stop protox
```

## IMPORTANT
### Generate protoc to JavaScript & type definition (.d.ts)
```
  npm run generate
``` 

### Hostname resolution (map hostname to ip address)
Map MacBook-Pro to localhost ip address (127.0.0.1),
Why? because we set CN to MacBook-Pro when generating server certificate.
The location is - for linux or mac in `/etc/hosts` or for Windows in `C:\Windows\System32\drivers\etc\hosts`
Let's add this line in the end of the file:
```
   127.0.0.1 MacBook-Pro
```