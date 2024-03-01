import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { TransactionGrpcService, CreateTransactionRequest, GetTransactionRequest, UpdateTransactionRequest, DeleteTransactionRequest, Transaction, DeleteTransactionResponse } from './transactions_pb';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class TransactionGrpcServiceImplementation implements TransactionGrpcService {

constructor(@InjectModel(Transaction.name) private transactionModel: mongoose.Model<Transaction>){}


  public createTransaction(call: ServerUnaryCall<CreateTransactionRequest>, callback: sendUnaryData<Transaction>): void {
    const request = call.request;
    const newTransaction = new this.transactionModel({
      amount: request.getTransaction().getAmount(),
      currency: request.getTransaction().getCurrency(),
      // Extract other properties from the request and map to your model
    });

    // Save the new transaction to the database
    newTransaction.save()
      .then((savedTransaction) => {
        const response = new Transaction();
        // Set response properties based on savedTransaction
        response.setId(savedTransaction._id);
        // Set other properties of the response
        callback(null, response);
      })
      .catch((error) => {
        console.error('Error creating transaction:', error);
        callback(error, null);
      });
  }

  public getTransaction(call: ServerUnaryCall<GetTransactionRequest>, callback: sendUnaryData<Transaction>): void {
    const request = call.request;
    const transactionId = request.getId();

    // Retrieve the transaction from the database based on the ID
    this.transactionModel.findById(transactionId)
      .then((transaction) => {
        if (!transaction) {
          callback(new Error('Transaction not found'), null);
          return;
        }

        const response = new Transaction();
        // Set response properties based on the retrieved transaction
        response.setId(transaction._id);
        // Set other properties of the response
        callback(null, response);
      })
      .catch((error) => {
        console.error('Error fetching transaction:', error);
        callback(error, null);
      });
  }

  public updateTransaction(call: ServerUnaryCall<UpdateTransactionRequest>, callback: sendUnaryData<Transaction>): void {
    const request = call.request;
    const transactionId = request.getTransaction().getId();

    // Find the existing transaction by ID
    this.transactionModel.findById(transactionId)
      .then((transaction) => {
        if (!transaction) {
          callback(new Error('Transaction not found'), null);
          return;
        }

        // Update transaction properties
        transaction.amount = request.getTransaction().getAmount();
        transaction.currency = request.getTransaction().getCurrency();
        // Update other properties as needed

        // Save the updated transaction
        return transaction.save();
      })
      .then((updatedTransaction) => {
        const response = new Transaction();
        // Set response properties based on updatedTransaction
        response.setId(updatedTransaction._id);
        // Set other properties of the response
        callback(null, response);
      })
      .catch((error) => {
        console.error('Error updating transaction:', error);
        callback(error, null);
      });
  }

  public deleteTransaction(call: ServerUnaryCall<DeleteTransactionRequest>, callback: sendUnaryData<DeleteTransactionResponse>): void {
    const request = call.request;
    const transactionId = request.getId();

    // Delete the transaction from the database
    this.transactionModel.findByIdAndDelete(transactionId)
      .then(() => {
        const response = new DeleteTransactionResponse();
        response.setSuccess(true);
        callback(null, response);
      })
      .catch((error) => {
        console.error('Error deleting transaction:', error);
        callback(error, null);
      });
  }
}
