import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { v4 as uuidv4 } from 'uuid';


export enum Type {
    DEPOSIT = 'Deposit',
    WITHDRAWAL = 'Withdrawal',
    TRANSFER = 'Transfer',

}

export enum Status {
    PENDING = 'Pending',
    COMPLETED = 'Completed',
    FAILED = 'Failed'
}


@Schema({
    timestamps: true
})
export class Transaction {

  
    @Prop({ required: true})
    @ApiProperty()
    amount: number;

    @Prop({ required: true})
    @ApiProperty()
    currency: string;

    @Prop({required: true})
    @ApiProperty()
    type: Type;

    @Prop({required: true})
    @ApiProperty()
    description: string;

    @Prop({required: true})
    @ApiProperty()
    recipientAccount: string;

    @Prop({required: true})
    @ApiProperty()
    status: Status;

    @Prop()
    @ApiProperty()
    createdAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);