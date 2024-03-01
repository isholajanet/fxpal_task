import { Module } from '@nestjs/common';
import { TransactionGrpcService } from './transaction.grpc.service';
import { TransactionSchema } from 'src/transaction/schemas/transaction.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema}]), TransactionGrpcModule],
    providers: [TransactionGrpcService],
    controllers: []
})
export class TransactionGrpcModule {}
