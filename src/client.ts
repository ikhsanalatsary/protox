import { HelloClient } from "../generated/hello_grpc_pb";
import { credentials } from "grpc";
import { HelloRequest } from "../generated/hello_pb";
import { readFileSync } from 'fs';

function main() {
    const host = "localhost";
    const port = ":6000";
    const cacert = readFileSync('certs/ca.crt'),
        cert = readFileSync('certs/client.crt'),
        key = readFileSync('certs/client.key'),
        kvpair = {
            'private_key': key,
            'cert_chain': cert
        },
        options = {
        'grpc.ssl_target_name_override' : 'example.com',
        'grpc.default_authority': 'example.com'
        };
    const creds = credentials.createSsl(cacert, key, cert);
    let client = new HelloClient(host + port, creds);
    let req = new HelloRequest();
    req.setFirstName('John'), req.setLastName('Wick');

    client.greeting(req, function (err, res) {
        if (err) {
            console.error(err);
            return
        }
        console.log('Greeting: %s', res.getMessage());
    })
}

main();