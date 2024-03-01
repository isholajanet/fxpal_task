import * as grpc from 'grpc';
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  GetTransactionRequest,
  GetTransactionResponse,
  UpdateTransactionRequest,
  UpdateTransactionResponse,
  DeleteTransactionRequest,
  DeleteTransactionResponse,
  Transaction,
} from './transactions_pb';
import { TransactionGrpcServiceClient } from './transactions_grpc_pb';

const client = new TransactionGrpcServiceClient('0.0.0.0:50051', grpc.credentials.createInsecure());

describe('Transaction gRPC methods', () => {
  let transactionId: string;

  test('CreateTransaction should create a new transaction', async () => {
    const request = new CreateTransactionRequest();
    const transaction = new Transaction();
    transaction.setAmount(100);
    transaction.setCurrency('USD');
    transaction.setType(Transaction.Type.DEPOSIT);
    transaction.setDescription('Deposit transaction');
    request.setTransaction(transaction);

    const response = await new Promise<CreateTransactionResponse>((resolve, reject) => {
      client.createTransaction(request, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });

    expect(response.getTransaction()).toBeDefined();
    transactionId = response.getTransaction().getId();
  
  });

  test('GetTransaction should retrieve an existing transaction', async () => {
    const request = new GetTransactionRequest();
    request.setId(transactionId);

    const response = await new Promise<GetTransactionResponse>((resolve, reject) => {
      client.getTransaction(request, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });

    expect(response.getTransaction()).toBeDefined();
    expect(response.getTransaction().getId()).toBe(transactionId);
  });

  test('UpdateTransaction should update an existing transaction', async () => {
    const request = new UpdateTransactionRequest();
    const updatedTransaction = new Transaction();
    updatedTransaction.setId(transactionId);
    updatedTransaction.setAmount(200);
    updatedTransaction.setDescription('Updated deposit transaction');
    request.setTransaction(updatedTransaction);

    const response = await new Promise<UpdateTransactionResponse>((resolve, reject) => {
      client.updateTransaction(request, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });

    expect(response.getSuccess()).toBe(true);
  });

  test('DeleteTransaction should delete an existing transaction', async () => {
    const request = new DeleteTransactionRequest();
    request.setId(transactionId);

    const response = await new Promise<DeleteTransactionResponse>((resolve, reject) => {
      client.deleteTransaction(request, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });

    expect(response.getSuccess()).toBe(true);
  });
});
