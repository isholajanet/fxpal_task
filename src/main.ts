import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';


async function bootstrap() {
  const protoDir = join(__dirname, 'TransactionGrpc');
  const restApp = await NestFactory.create(AppModule);

  restApp.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.GRPC,
      options: {
        package: 'transactions',
        protoPath: join(protoDir, 'transactions.proto'),
        url: '127.0.0.1:50051',
      },
    }
  );

  await restApp.startAllMicroservices();

  await restApp.listen(3002);



}
bootstrap();
