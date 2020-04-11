"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_grpc_pb_1 = require("../generated/hello_grpc_pb");
const grpc_1 = require("grpc");
const hello_pb_1 = require("../generated/hello_pb");
const fs_1 = require("fs");
function main() {
    const args = process.argv.slice(2);
    let firstname = args[0] || 'John';
    let lastname = args[1] || 'Wick';
    const host = "MacBook-Pro";
    const port = ":50051";
    const cacert = fs_1.readFileSync('certs/ca.crt'), cert = fs_1.readFileSync('certs/client.crt'), key = fs_1.readFileSync('certs/client.key'), kvpair = {
        'private_key': key,
        'cert_chain': cert
    };
    const creds = grpc_1.credentials.createSsl(cacert, key, cert);
    let client = new hello_grpc_pb_1.HelloClient(host + port, creds);
    let req = new hello_pb_1.HelloRequest();
    req.setFirstName(firstname), req.setLastName(lastname);
    client.greeting(req, function (err, res) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Greeting: %s', res.getMessage());
    });
}
main();
