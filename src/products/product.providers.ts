import ProductRepository from './repositories/product.repository';
import ProductService from './services/product.service';
import { Scope } from '@nestjs/common';

export default [
  {
    provide: 'PRODUCT_REPOSITORY',
    useClass: ProductRepository,
    scope: Scope.TRANSIENT,
  },
  {
    provide: 'PRODUCT_SERVICE',
    useClass: ProductService,
    scope: Scope.REQUEST,
  },
];
