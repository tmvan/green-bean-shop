import EditProductRequest from 'src/products/services/dto/edit-product.request';

export default class EditProductModel {
  toRequest(productId: string): EditProductRequest {
    throw new Error('Not implemented');
  }
}
