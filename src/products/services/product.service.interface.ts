import SearchProductRequest from './dto/search-product.request';
import SearchProductResponse from './dto/search-product.response';
import GetProductRequest from './dto/get-product.request';
import GetProductResponse from './dto/get-product.response';
import CreateProductRequest from './dto/create-product.request';
import CreateProductResponse from './dto/create-product.response';
import EditProductRequest from './dto/edit-product.request';
import EditProductResponse from './dto/edit-product.response';
import RemoveProductRequest from './dto/remove-product.request';
import RemoveProductResponse from './dto/remove-product.response';

export default interface IProductService {
  search(request: SearchProductRequest): SearchProductResponse;
  get(request: GetProductRequest): GetProductResponse;
  create(request: CreateProductRequest): CreateProductResponse;
  edit(request: EditProductRequest): EditProductResponse;
  remove(request: RemoveProductRequest): RemoveProductResponse;
}
