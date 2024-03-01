import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TransactionModule } from './transaction/transaction.module';




@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
    
  }),
  MongooseModule.forRoot(process.env.DB_URI),
  TransactionModule,
  
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
