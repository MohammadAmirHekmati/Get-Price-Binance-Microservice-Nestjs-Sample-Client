import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const logger=new Logger()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000).then(()=>
  logger.log('Client Running...!')
  );
}
bootstrap();
