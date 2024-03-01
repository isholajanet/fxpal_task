// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var transactions_pb = require('./transactions_pb.js');

function serialize_transactions_CreateTransactionRequest(arg) {
  if (!(arg instanceof transactions_pb.CreateTransactionRequest)) {
    throw new Error('Expected argument of type transactions.CreateTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transactions_CreateTransactionRequest(buffer_arg) {
  return transactions_pb.CreateTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transactions_DeleteTransactionRequest(arg) {
  if (!(arg instanceof transactions_pb.DeleteTransactionRequest)) {
    throw new Error('Expected argument of type transactions.DeleteTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transactions_DeleteTransactionRequest(buffer_arg) {
  return transactions_pb.DeleteTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transactions_DeleteTransactionResponse(arg) {
  if (!(arg instanceof transactions_pb.DeleteTransactionResponse)) {
    throw new Error('Expected argument of type transactions.DeleteTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transactions_DeleteTransactionResponse(buffer_arg) {
  return transactions_pb.DeleteTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transactions_GetTransactionRequest(arg) {
  if (!(arg instanceof transactions_pb.GetTransactionRequest)) {
    throw new Error('Expected argument of type transactions.GetTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transactions_GetTransactionRequest(buffer_arg) {
  return transactions_pb.GetTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transactions_Transaction(arg) {
  if (!(arg instanceof transactions_pb.Transaction)) {
    throw new Error('Expected argument of type transactions.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transactions_Transaction(buffer_arg) {
  return transactions_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transactions_UpdateTransactionRequest(arg) {
  if (!(arg instanceof transactions_pb.UpdateTransactionRequest)) {
    throw new Error('Expected argument of type transactions.UpdateTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transactions_UpdateTransactionRequest(buffer_arg) {
  return transactions_pb.UpdateTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionGrpcServiceService = exports.TransactionGrpcServiceService = {
  createTransaction: {
    path: '/transactions.TransactionGrpcService/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transactions_pb.CreateTransactionRequest,
    responseType: transactions_pb.Transaction,
    requestSerialize: serialize_transactions_CreateTransactionRequest,
    requestDeserialize: deserialize_transactions_CreateTransactionRequest,
    responseSerialize: serialize_transactions_Transaction,
    responseDeserialize: deserialize_transactions_Transaction,
  },
  getTransaction: {
    path: '/transactions.TransactionGrpcService/GetTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transactions_pb.GetTransactionRequest,
    responseType: transactions_pb.Transaction,
    requestSerialize: serialize_transactions_GetTransactionRequest,
    requestDeserialize: deserialize_transactions_GetTransactionRequest,
    responseSerialize: serialize_transactions_Transaction,
    responseDeserialize: deserialize_transactions_Transaction,
  },
  updateTransaction: {
    path: '/transactions.TransactionGrpcService/UpdateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transactions_pb.UpdateTransactionRequest,
    responseType: transactions_pb.Transaction,
    requestSerialize: serialize_transactions_UpdateTransactionRequest,
    requestDeserialize: deserialize_transactions_UpdateTransactionRequest,
    responseSerialize: serialize_transactions_Transaction,
    responseDeserialize: deserialize_transactions_Transaction,
  },
  deleteTransaction: {
    path: '/transactions.TransactionGrpcService/DeleteTransaction',
    requestStream: false,
    responseStream: false,
    requestType: transactions_pb.DeleteTransactionRequest,
    responseType: transactions_pb.DeleteTransactionResponse,
    requestSerialize: serialize_transactions_DeleteTransactionRequest,
    requestDeserialize: deserialize_transactions_DeleteTransactionRequest,
    responseSerialize: serialize_transactions_DeleteTransactionResponse,
    responseDeserialize: deserialize_transactions_DeleteTransactionResponse,
  },
};

exports.TransactionGrpcServiceClient = grpc.makeGenericClientConstructor(TransactionGrpcServiceService);
