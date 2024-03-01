import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Status, Type } from "../schemas/transaction.schema";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateTransactionDto {

    @IsNumber()
    @IsOptional()
    @ApiProperty()
    readonly amount: number;

    @IsString()
    @IsOptional()
    @ApiProperty()
    readonly currency: string;

    @IsOptional()
    @ApiProperty()
    @IsEnum(Type, {message: "Please enter correct transaction type"})
    readonly type: Type;

    @IsOptional()
    @IsString()
    @ApiProperty()
    readonly description: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    readonly recipientAccount: string;

    @IsOptional()
    @IsEnum(Status, { message: "Please enter correct status"})
    @ApiProperty()
    readonly status: Status;

}