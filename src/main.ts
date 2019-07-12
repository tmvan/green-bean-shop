import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const dirname = __dirname || process.cwd()

  app.useStaticAssets(join(dirname, '..', 'public'));
  app.setBaseViewsDir(join(dirname, '..', 'views'));
  app.setViewEngine('hbs');

  const port = process.env.PORT || 3000;

  Logger.log(`App is running at port ${port}`);

  await app.listen(port);
}

bootstrap();
