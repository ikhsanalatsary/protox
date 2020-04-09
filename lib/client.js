"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_grpc_pb_1 = require("../scripts/generated/hello_grpc_pb");
const grpc_1 = require("grpc");
const hello_pb_1 = require("../scripts/generated/hello_pb");
function main() {
    const host = "localhost";
    const port = ":6000";
    let client = new hello_grpc_pb_1.HelloClient(host + port, grpc_1.credentials.createInsecure());
    let req = new hello_pb_1.HelloRequest();
    req.setFirstName('John'), req.setLastName('Wick');
    client.greeting(req, function (err, res) {
        console.log('Greeting: %s', res.getMessage());
    });
}
main();
