import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  await app.listen(config.port, () => {
    console.log(`Server started at http://localhost:${config.port}`);
  });
}
bootstrap();
