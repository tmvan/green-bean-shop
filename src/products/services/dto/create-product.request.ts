import Product from 'src/products/repositories/entities/product.entity';

export default class CreateProductRequest {
  public toEntity(): Product {
    return new Product();
  }
}
