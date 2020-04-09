"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("grpc"));
const hello_pb_1 = require("../scripts/generated/hello_pb");
const hello_grpc_pb_1 = require("../scripts/generated/hello_grpc_pb");
const host = "localhost";
const port = ":6000";
const server = new grpc.Server();
function greeting(call, callback) {
    let req = call.request;
    let firstname = req.getFirstName();
    let lastname = req.getLastName();
    let res = new hello_pb_1.HelloResponse();
    res.setMessage(`Hello ${firstname} ${lastname}!`);
    callback(null, res);
}
server.addService(hello_grpc_pb_1.HelloService, { greeting });
server.bind(host + port, grpc.ServerCredentials.createInsecure());
server.start();
console.log(`GRPC is now running on ${host + port}`);
