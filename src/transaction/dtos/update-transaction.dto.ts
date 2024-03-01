import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Status, Type } from "../schemas/transaction.schema";

export class UpdateTransactionDto {

    @IsNumber()
    @IsOptional()
    readonly amount: number;

    @IsString()
    @IsOptional()
    readonly currency: string;

    @IsOptional()
    @IsEnum(Type, {message: "Please enter correct transaction type"})
    readonly type: Type;

    @IsOptional()
    @IsString()
    readonly description: string;

    @IsOptional()
    @IsString()
    readonly recipientAccount: string;

    @IsOptional()
    @IsEnum(Status, { message: "Please enter correct status"})
    readonly status: Status;

}