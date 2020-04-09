import { HelloClient } from "../generated/hello_grpc_pb";
import { credentials } from "grpc";
import { HelloRequest } from "../generated/hello_pb";

function main() {
    const host = "localhost";
    const port = ":6000";
    let client = new HelloClient(host + port, credentials.createInsecure());
    let req = new HelloRequest();
    req.setFirstName('John'), req.setLastName('Wick');

    client.greeting(req, function (err, res) {
        console.log('Greeting: %s', res.getMessage());
    })
}

main();