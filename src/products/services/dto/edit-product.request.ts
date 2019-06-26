import Product from 'src/products/repositories/entities/product.entity';

export default class EditProductRequest {
  private _productId: string;

  constructor(productId: string) {
    this._productId = productId;
  }

  public get productId(): string {
    return this._productId;
  }

  public editEntity(product: Product): void {
    // TODO mapping from request to entity
  }
}
