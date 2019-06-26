import { Module } from '@nestjs/common';
import ProductController from './controllers/product.controller';
import productProviders from './product.providers';

@Module({
  controllers: [ProductController],
  providers: [...productProviders],
})
export default class ProductModule {}
