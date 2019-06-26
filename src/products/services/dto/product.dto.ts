import Product from 'src/products/repositories/entities/product.entity';

export default class ProductDto {
  private _id: string;
  private _description: string;
  private _name: string;
  private _price: number;
  private _disabled: boolean;

  public get id(): string {
    return this._id;
  }
  public set id(v: string) {
    this._id = v;
  }

  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  public get description(): string {
    return this._description;
  }
  public set description(v: string) {
    this._description = v;
  }

  public get price(): number {
    return this._price;
  }
  public set price(v: number) {
    this._price = v;
  }

  public get disabled(): boolean {
    return this._disabled;
  }
  public set disabled(v: boolean) {
    this._disabled = v;
  }

  public static fromEntity(product: Product): ProductDto {
    const dto = new ProductDto();

    dto.id = product.id;
    dto.description = product.description;
    dto.name = product.name;
    dto.price = product.price;
    dto.disabled = product.disabled;

    return dto;
  }
}
