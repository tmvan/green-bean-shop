import CreateProductRequest from '../../services/dto/create-product.request';
import { IsString, IsInt, IsBoolean } from 'class-validator';

export default class CreateProductModel {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsInt()
  public price: number;

  @IsBoolean()
  public disabled: boolean;

  public toRequest(): CreateProductRequest {
    const request = new CreateProductRequest();

    request.name = this.name;
    request.description = this.description;
    request.price = this.price;
    request.disabled = this.disabled;

    return request;
  }
}
