import { HelloClient } from "../generated/hello_grpc_pb";
import { credentials } from "grpc";
import { HelloRequest } from "../generated/hello_pb";
import { readFileSync } from 'fs';

function main() {
    const args = process.argv.slice(2);
    let firstname = args[0] || 'John';
    let lastname = args[1] || 'Wick';
    const host = "MacBook-Pro";
    const port = ":50051";
    const cacert = readFileSync('certs/ca.crt'),
        cert = readFileSync('certs/client.crt'),
        key = readFileSync('certs/client.key'),
        kvpair = {
            'private_key': key,
            'cert_chain': cert
        };
    const creds = credentials.createSsl(cacert, key, cert);
    let client = new HelloClient(host + port, creds);
    let req = new HelloRequest();
    req.setFirstName(firstname), req.setLastName(lastname);

    client.greeting(req, function (err, res) {
        if (err) {
            console.error(err);
            return
        }
        console.log('Greeting: %s', res.getMessage());
    })
}

main();