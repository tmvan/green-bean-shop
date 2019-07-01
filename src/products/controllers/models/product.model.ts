import ProductDto from "../../services/dto/product.dto";

export default class ProductModel {
  public productId: string;
  public name: string;
  public description: string;
  public price: number;
  public disabled: boolean;

  constructor(dto: ProductDto) {
    this.productId = dto.id;
    this.name = dto.name;
    this.description = dto.description;
    this.price = dto.price;
    this.disabled = dto.disabled;
  }
}
