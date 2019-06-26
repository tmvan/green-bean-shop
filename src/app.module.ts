import { AboutController } from './about.controller';
import { HomeController } from './home.controller';
import { Module } from '@nestjs/common';
import ProductModule from './products/product.module';

@Module({
  imports: [ProductModule],
  controllers: [HomeController, AboutController],
  providers: [],
})
export class AppModule { }
