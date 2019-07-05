import EditProductRequest from '../../services/dto/edit-product.request';

export default class EditProductModel {
  public name: string;
  public description: string;
  public price: number;
  public disabled: boolean;

  public toRequest(productId: string): EditProductRequest {
    throw new Error('Not implemented');
  }
}
