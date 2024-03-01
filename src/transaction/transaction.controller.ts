import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from './schemas/transaction.schema';
import { CreateTransactionDto } from './dtos/create-transaction.dto';
import { UpdateTransactionDto } from './dtos/update-transaction.dto';

import { Query as ExpressQuery } from 'express-serve-static-core'

@Controller('transactions')
export class TransactionController {

    constructor(private transactionService: TransactionService){}

    @Get()
    async getAllTransactions(@Query() query: ExpressQuery): Promise<Transaction[]> {
        try{
        return this.transactionService.findAll(query);
        } catch (error){
            throw new Error("Could not get transactions: " +error.message);
        }
    }

    @Post('transaction')
    async createTransaction(@Body() transaction: CreateTransactionDto): Promise<Transaction>{
        try{
            return this.transactionService.create(transaction);
        } catch (error) {
            throw new Error("Unable to create new transaction with error message: " + error.message);
        }
    }

    @Get(':id')
    async getTransactionById(
        @Param('id')
        id: string
    ): Promise<Transaction>{
        try{
            return this.transactionService.findById(id);
        } catch (error){
            throw new NotFoundException("The transaction with the id does not exist");
        }
    }

    @Put(':id')
    async updateTransaction(
        @Param('id') 
        id: string, 
        @Body() 
        transaction: UpdateTransactionDto): Promise<Transaction>{

            try{

                return this.transactionService.updateById(id, transaction);
            } catch (error){
                throw new Error("Could not update transaction with error message " + error.message);
            }
       
    }

    @Delete(':id')
    async deleteTransactionById(
        @Param('id')
        id: string
    ): Promise<Transaction>{
        try{
            return this.transactionService.deleteById(id);
        } catch(error){
            throw new Error("Could not delete user with id: " +error.message);
        }
    }
}
