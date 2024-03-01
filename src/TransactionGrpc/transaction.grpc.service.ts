import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { CreateTransactionDto } from "src/transaction/dtos/create-transaction.dto";
import { Status, Transaction, Type } from "src/transaction/schemas/transaction.schema";
import { CreateTransactionRequest, DeleteTransactionRequest, DeleteTransactionResponse, GetTransactionRequest, UpdateTransactionRequest } from "./transaction.interface";



@Injectable()
export class TransactionGrpcService {
    constructor(@InjectModel(Transaction.name) private transactionModel: mongoose.Model<Transaction>){}


    async createTransaction (request: CreateTransactionRequest): Promise<Transaction> {
        try{

            const newTransaction = await this.transactionModel.create(request);
            return newTransaction;
        }catch(error){
            throw new Error(`Failed to create transaction: ${error.message}`)
        }
     
    }
    
    async getTransaction(request: GetTransactionRequest): Promise<Transaction>{
        try{
            const { _id } = request;
            return this.transactionModel.findById(_id);
        }catch(error){
            throw new Error('Failed to find the transaction');
        }
    }

    async updateTransaction(request: UpdateTransactionRequest): Promise<Transaction> {
        try{
            const { transaction } = request;
            const { _id, ...updateData} = transaction;
            return await this.transactionModel.findByIdAndUpdate(_id, updateData);
        } catch(error){
            throw new Error("Unable to update transaction")
        }

    }

    async deleteTransaction(request: DeleteTransactionRequest): Promise<DeleteTransactionResponse> {
        try{
            const { _id } = request;
            const result = await this.transactionModel.findByIdAndDelete(_id);
            return { success: !!result};

        }catch(error){
            throw new Error("Could not delete the transaction");
        }
    } 


}