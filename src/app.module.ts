import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import ProductModule from './products/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
