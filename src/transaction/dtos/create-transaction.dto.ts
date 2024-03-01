import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Status, Type } from "../schemas/transaction.schema";

export class CreateTransactionDto {

    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;

    @IsNotEmpty()
    @IsString()
    readonly currency: string;

    
    @IsNotEmpty()
    @IsEnum(Type, { message: "Please enter correct transaction type."})
    readonly type: Type;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly recipientAccount: string;

    @IsNotEmpty()
    @IsEnum(Status, { message: "Please enter correct status."})
    readonly status: Status;

}