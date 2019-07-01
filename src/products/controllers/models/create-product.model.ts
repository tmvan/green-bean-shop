import CreateProductRequest from 'src/products/services/dto/create-product.request';

export default class CreateProductModel {
  public name: string;
  public description: string;
  public price: number;
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
