import { Controller, OnModuleInit } from "@nestjs/common";
import { TransactionGrpcService } from "./transaction.grpc.service";
import { GrpcMethod } from "@nestjs/microservices";
import { CreateTransactionRequest, DeleteTransactionRequest, DeleteTransactionResponse, GetTransactionRequest, UpdateTransactionRequest } from "./transaction.interface";
import { Transaction } from "src/transaction/schemas/transaction.schema";


@Controller('')
export class TransactionGrpcController {

    
    constructor(
        private readonly transactionGrpcService: TransactionGrpcService){}


 
    @GrpcMethod('TransactionGrpcService', 'CreateTransaction')
    async createTransaction(request: CreateTransactionRequest){
        console.log(request);
        return this.transactionGrpcService.createTransaction(request);
    }

    @GrpcMethod('TransactionGrpcService', 'GetTransaction')
    async getTransaction(request: GetTransactionRequest): Promise<Transaction> {
        return this.transactionGrpcService.getTransaction(request);
    }

    @GrpcMethod('TransactionGrpcService', 'UpdateTransaction')
    async updateTransaction(request: UpdateTransactionRequest): Promise<Transaction> {
        return this.transactionGrpcService.updateTransaction(request);
    }

    @GrpcMethod('TransactionGrpcService', 'DeleteTransaction')
    async deleteTransaction(request: DeleteTransactionRequest): Promise<DeleteTransactionResponse> {
        return this.transactionGrpcService.deleteTransaction(request);
    }
}