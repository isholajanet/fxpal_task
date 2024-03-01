import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Status, Type } from "../schemas/transaction.schema";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTransactionDto {

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    readonly amount: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly currency: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Type, { message: "Please enter correct transaction type."})
    readonly type: Type;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly recipientAccount: string;

    @IsNotEmpty()
    @ApiProperty()
    @IsEnum(Status, { message: "Please enter correct status."})
    readonly status: Status;

}