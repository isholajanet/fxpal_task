import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './schemas/transaction.schema';
import mongoose from 'mongoose';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { UpdateTransactionDto } from './dtos/update-transaction.dto';
import { Query } from 'express-serve-static-core';

@Injectable()
export class TransactionService {

    constructor(
        @InjectModel(Transaction.name)
        private transactionModel: mongoose.Model<Transaction>
    ) {}

    async findAll(query: Query): Promise<Transaction[]>{

        try{

            const resPerPage = 2;
            const currentPage = Number(query.page) || 1;
            const skip = resPerPage * (currentPage - 1)
            const transactions = await this.transactionModel.find().limit(resPerPage).skip(skip);
            return transactions;

        } catch(error){
            throw new Error(`Failed to retrieve transactions: ${error.message}`)
        }
    }

    async create(transaction: CreateTransactionDto): Promise<Transaction> {
        try{
            const res = await this.transactionModel.create(transaction);
            return res;
        } catch(error){
            throw new Error(`Failed to create transaction: ${error.message}`)
        }
    }

    async findById(transactionId: string): Promise<Transaction> {

        const isValid = mongoose.isValidObjectId(transactionId);

        if(!isValid) {
            throw new BadRequestException("Please enter correct Id");
        }

        try{    

            const transaction = await this.transactionModel.findById(transactionId);
           
            if (!transaction ) {
                throw new NotFoundException("Transaction with id ${transactionId} not found ");
            }

            return transaction;

        } catch (error){

            throw new NotFoundException("Transaction not found");

        }

    }

    async updateById(id: string, transaction: UpdateTransactionDto): Promise<Transaction> {
        try{

        const updatedTransaction = await this.transactionModel.findByIdAndUpdate(id, transaction, {
            new: true,
            runValidators:true,
        });

        if (!updatedTransaction) {
            throw new NotFoundException("Transaction with id ${id} not found")
        }
        return updatedTransaction;
        }catch(error){
            throw new Error(`Failed to update transaction: ${error.message}`)
            
        
        }
    }

    async deleteById(id: string): Promise<Transaction> {

        return await this.transactionModel.findByIdAndDelete(id);

        
    }
}
