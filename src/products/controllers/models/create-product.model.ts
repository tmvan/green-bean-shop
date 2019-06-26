import CreateProductRequest from 'src/products/services/dto/create-product.request';

export default class CreateProductModel {
  toRequest(): CreateProductRequest {
    throw new Error('Not implemented');
  }
}
