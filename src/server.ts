import * as grpc from "grpc";
import { HelloRequest, HelloResponse } from "../generated/hello_pb";
import { HelloService } from "../generated/hello_grpc_pb";
import { readFileSync } from 'fs';

const host = "0.0.0.0";
const port = ":6000";
const server = new grpc.Server();
const cacert = readFileSync('certs/ca.crt'),
    cert = readFileSync('certs/server.crt'),
    key = readFileSync('certs/server.key'),
    kvpair = {
        'private_key': key,
        'cert_chain': cert
    };

const creds = grpc.ServerCredentials.createSsl(cacert, [kvpair], true);

function greeting(call: grpc.ServerUnaryCall<HelloRequest>, callback: grpc.sendUnaryData<HelloResponse>) {
    let req = call.request;
    let firstname = req.getFirstName();
    let lastname = req.getLastName();
    let res = new HelloResponse();
    res.setMessage(`Hello ${firstname} ${lastname}!`);

    callback(null, res);
}

server.addService(HelloService, { greeting });
server.bind(host + port, creds);
server.start();
console.log(`GRPC is now running on ${host + port}`);
