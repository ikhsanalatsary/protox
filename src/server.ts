import * as grpc from "grpc";
import { HelloRequest, HelloResponse } from "../generated/hello_pb";
import { HelloService } from "../generated/hello_grpc_pb";

const host = "localhost";
const port = ":6000";
const server = new grpc.Server();

function greeting(call: grpc.ServerUnaryCall<HelloRequest>, callback: grpc.sendUnaryData<HelloResponse>) {
    let req = call.request;
    let firstname = req.getFirstName();
    let lastname = req.getLastName();
    let res = new HelloResponse();
    res.setMessage(`Hello ${firstname} ${lastname}!`);

    callback(null, res);
}

server.addService(HelloService, { greeting });
server.bind(host + port, grpc.ServerCredentials.createInsecure());
server.start();
console.log(`GRPC is now running on ${host + port}`);
