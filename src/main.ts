import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const nodeEnv = configService.get<string>('NODE_ENV');
  if (nodeEnv === 'development') {
    console.log('Running in development mode');
  } else if (nodeEnv === 'production') {
    console.log('Running in production mode');
  }

  await app.listen(3000);

}
bootstrap();
