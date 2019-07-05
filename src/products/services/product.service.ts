import { Injectable, Inject } from '@nestjs/common';
import IProductService from './product.service.interface';
import IProductRepository from '../repositories/product.repository.interface';
import SearchProductRequest from './dto/search-product.request';
import SearchProductResponse from './dto/search-product.response';
import ProductDto from './dto/product.dto';
import GetProductRequest from './dto/get-product.request';
import GetProductResponse from './dto/get-product.response';
import CreateProductRequest from './dto/create-product.request';
import CreateProductResponse from './dto/create-product.response';
import EditProductRequest from './dto/edit-product.request';
import EditProductResponse from './dto/edit-product.response';
import RemoveProductRequest from './dto/remove-product.request';
import RemoveProductResponse from './dto/remove-product.response';

@Injectable()
export default class ProductService implements IProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly _productRepo: IProductRepository,
  ) {}

  search(request: SearchProductRequest): SearchProductResponse {
    const entities = this._productRepo.selectAll(
      request.offset(),
      request.limit(),
    );
    const dtos = entities.map(ProductDto.fromEntity);
    const count = this._productRepo.count();
    const response = new SearchProductResponse(
      dtos,
      count,
      request.pageIndex,
      request.pageSize,
    );

    return response;
  }

  get(request: GetProductRequest): GetProductResponse {
    const entity = this._productRepo.selectById(request.productId);
    const dto = ProductDto.fromEntity(entity);
    const response = new GetProductResponse();

    response.product = dto;
    return response;
  }

  create(request: CreateProductRequest): CreateProductResponse {
    const entity = request.toEntity();
    const productId = this._productRepo.insert(entity);
    const response = new CreateProductResponse();

    response.productId = productId;
    return response;
  }

  edit(request: EditProductRequest): EditProductResponse {
    const entity = this._productRepo.selectById(request.productId);

    request.editEntity(entity);
    this._productRepo.update(entity);

    const response = new EditProductResponse();

    return response;
  }

  remove(request: RemoveProductRequest): RemoveProductResponse {
    this._productRepo.delete(request.productId);

    const response = new RemoveProductResponse();

    return response;
  }
}
