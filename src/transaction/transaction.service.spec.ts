import { Test, TestingModule } from "@nestjs/testing"
import { TransactionService } from "./transaction.service"
import { getModelToken } from "@nestjs/mongoose";
import { Status, Transaction, Type } from "./schemas/transaction.schema";
import mongoose, { Model } from "mongoose";
import { async } from "rxjs";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { CreateTransactionDto } from "./dtos/create-transaction.dto";
import exp from "constants";

describe('TransactionService', () => {

    let transactionService: TransactionService;
    let model: Model<Transaction>

    const mockTransaction = {
        _id: "65de6421bb4add5cac0ee91c",
        amount: 2500,
        currency: "USD",
        type: Type.DEPOSIT,
        description: "payment",
        recipientAccount: "1222984934",
        status: Status.COMPLETED, 
    }

    const mockTransactionService = {
        find: jest.fn(),
        create: jest.fn(),
        findById: jest.fn(),
        updateById: jest.fn(),
        deleteById: jest.fn(),
    }
    

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TransactionService,
                {
                    provide: getModelToken(Transaction.name),
                    useValue: mockTransactionService,
                }
            ]
        }).compile()

        transactionService = module.get<TransactionService>(TransactionService)
        model = module.get<Model<Transaction>>(getModelToken(Transaction.name));

    });

    describe('findById', () => {
        it('should find transaction by Id', async () => {

            const transactionId = "65de6421bb4add5cac0ee91c";

            jest.spyOn(model, 'findById').mockResolvedValue(mockTransaction);

            const result = await transactionService.findById(transactionId);

             expect(model.findById).toHaveBeenCalledWith(transactionId)

            expect(result).toEqual(mockTransaction);
        });

        it('should throw BadRequestException if invalid ID is provided', async () => {
            const id = 'invalid-id'

            const isValidObjectIdMock = jest.spyOn(mongoose, 'isValidObjectId').mockReturnValue(false);

            await expect(transactionService.findById(id)).rejects.toThrow(
                BadRequestException
            );

            expect(isValidObjectIdMock).toHaveBeenCalledWith(id);
            isValidObjectIdMock.mockRestore();
        });

        it('should throw NotFoundException if transaction with the given ID is not found', async () => {

            const nonExistentId = 'non-existent-id';
            jest.spyOn(model, 'findById').mockResolvedValue(mockTransaction);

            await expect(transactionService.findById(nonExistentId)).rejects.toThrow(
                NotFoundException
            );

            expect(model.findById).toHaveBeenCalledWith(nonExistentId);
        });

    });

    describe('findAll', () => {
        it('should return an array of transactions', async() => {
            const query = { page: '1', keyword: 'test'};

            jest.spyOn(model, 'find').mockImplementation(
                () => ({
                    limit: () => ({
                        skip: jest.fn().mockResolvedValue(mockTransaction),
                    }),
                } as any), 
            );

            const result = await transactionService.findAll(query);

            expect(result).toEqual(mockTransaction);
        })
    });

    describe('create', () => {


        it('should create and return a transaction', async () => {
            const createTransactionDto = {
                amount: 2500,
                currency: "USD",
                type: Type.DEPOSIT,
                description: "payment",
                recipientAccount: "1222984934",
                status: Status.COMPLETED,
            } as CreateTransactionDto;

            const transaction = {
                amount: 2500,
                currency: "USD",
                type: "Deposit",
                description: "payment",
                recipientAccount: "1222984934",
                status: "Completed",
                _id: "65de6421bb4add5cac0ee91c",
            
            }

            jest.spyOn(mockTransactionService, 'create').mockReturnValue(transaction);
            const result = await transactionService.create(createTransactionDto );

            expect(mockTransactionService.create).toBeCalled();
            expect(mockTransactionService.create).toBeCalledWith(createTransactionDto);

            expect(result).toEqual(transaction);


        })
    });

    describe('deleteById', () => {
        it('should delete and return a transaction', async () => {
            jest.spyOn(model, 'findByIdAndDelete').mockResolvedValue(mockTransaction);

            const result = await transactionService.deleteById(mockTransaction._id);

            expect(model.findByIdAndDelete).toHaveBeenCalledWith(mockTransaction._id);

            expect(result).toEqual(mockTransaction);
        })
    })
})