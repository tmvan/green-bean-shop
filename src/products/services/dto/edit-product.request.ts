import Product from 'src/products/repositories/entities/product.entity';

export default class EditProductRequest {
  private _productId: string;
  
  public name: string;
  public description: string;
  public price: number;
  public disabled: boolean;

  constructor(productId: string) {
    this._productId = productId;
  }

  public get productId(): string {
    return this._productId;
  }

  public editEntity(product: Product): void {
    if(product.id !== this._productId){
      throw new Error("Invalid entity id.");
    }

    product.name = this.name;
    product.description = this.description;
    product.price = this.price;
    product.disabled = this.disabled;
  }
}
