import ProductDto from 'src/products/services/dto/product.dto';

export default class ProductModel {
  public productId: string;

  constructor(dto: ProductDto) {
    this.productId = dto.id;
  }
}
