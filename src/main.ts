import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'geomap',
      protoPath: join(__dirname, '../../../shared/proto/geo_service.proto'),
      url: 'localhost:50052',
    },
  });



  await app.startAllMicroservices();
  await app.listen(3030);
}

bootstrap();
