// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var hello_pb = require('./hello_pb.js');

function serialize_Hello_v1_HelloRequest(arg) {
  if (!(arg instanceof hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type Hello.v1.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Hello_v1_HelloRequest(buffer_arg) {
  return hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Hello_v1_HelloResponse(arg) {
  if (!(arg instanceof hello_pb.HelloResponse)) {
    throw new Error('Expected argument of type Hello.v1.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Hello_v1_HelloResponse(buffer_arg) {
  return hello_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloService = exports.HelloService = {
  greeting: {
    path: '/Hello.v1.Hello/Greeting',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.HelloRequest,
    responseType: hello_pb.HelloResponse,
    requestSerialize: serialize_Hello_v1_HelloRequest,
    requestDeserialize: deserialize_Hello_v1_HelloRequest,
    responseSerialize: serialize_Hello_v1_HelloResponse,
    responseDeserialize: deserialize_Hello_v1_HelloResponse,
  },
};

exports.HelloClient = grpc.makeGenericClientConstructor(HelloService);
