import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { setupSwagger } from '../swagger/swagger'



async function bootstrap() {
  const protoDir = join(__dirname, '..', 'TransactionGrpc');
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);

  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.GRPC,
      options: {
        package: 'transactions',
        protoPath: join(protoDir, 'transactions.proto'),
        url: '127.0.0.1:50051',
      },
    }
  );

  await app.startAllMicroservices();

  await app.listen(3000);



}
bootstrap();
