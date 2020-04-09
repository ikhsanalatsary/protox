// package: Hello.v1
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as hello_pb from "./hello_pb";

interface IHelloService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    greeting: IHelloService_IGreeting;
}

interface IHelloService_IGreeting extends grpc.MethodDefinition<hello_pb.HelloRequest, hello_pb.HelloResponse> {
    path: string; // "/Hello.v1.Hello/Greeting"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<hello_pb.HelloResponse>;
}

export const HelloService: IHelloService;

export interface IHelloServer {
    greeting: grpc.handleUnaryCall<hello_pb.HelloRequest, hello_pb.HelloResponse>;
}

export interface IHelloClient {
    greeting(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    greeting(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    greeting(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class HelloClient extends grpc.Client implements IHelloClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public greeting(request: hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public greeting(request: hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public greeting(request: hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
