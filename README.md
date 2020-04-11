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
    // for linux or mc
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

## MISC
### Generate protoc to JavasSript & type definition
```
  npm run generate
``` 