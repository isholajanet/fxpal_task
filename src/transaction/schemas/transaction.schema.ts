import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
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
    amount: number;

    @Prop({ required: true})
    currency: string;

    @Prop({required: true})
    type: Type;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    recipientAccount: string;

    @Prop({required: true})
    status: Status;

    @Prop()
    createdAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);