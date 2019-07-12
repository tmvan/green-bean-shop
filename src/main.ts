import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join, resolve, dirname } from 'path';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const path = resolve(dirname(''));

  app.useStaticAssets(join(path, 'public'));
  app.setBaseViewsDir(join(path, 'views'));
  app.setViewEngine('hbs');

  const port = process.env.PORT || 3000;

  Logger.log(`App is running at port ${port}`);

  await app.listen(port);
}

bootstrap();
