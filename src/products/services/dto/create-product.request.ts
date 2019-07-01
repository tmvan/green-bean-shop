import Product from "../../repositories/entities/product.entity";

export default class CreateProductRequest {
  public name: string;
  public description: string;
  public price: number;
  public disabled: boolean;

  public toEntity(): Product {
    const product = new Product();

    product.description = this.description;
    product.name = this.name;
    product.price = this.price;
    product.disabled = this.disabled;

    return product;
  }
}
