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
import IProductService from './product.service.interface';
import IProductRepository from '../repositories/product.repository.interface';
import ProductDto from './dto/product.dto';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export default class ProductService implements IProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private readonly _productRepo: IProductRepository,
  ) {}

  search(request: SearchProductRequest): SearchProductResponse {
    var entities = this._productRepo.selectAll(
      request.offset(),
      request.limit(),
    );
    var dtos = entities.map(ProductDto.fromEntity);
    var count = this._productRepo.count();
    var response = new SearchProductResponse(
      dtos,
      count,
      request.pageIndex,
      request.pageSize,
    );

    return response;
  }

  get(request: GetProductRequest): GetProductResponse {
    var entity = this._productRepo.selectById(request.productId);
    var dto = ProductDto.fromEntity(entity);
    var response = new GetProductResponse();

    response.product = dto;
    return response;
  }

  create(request: CreateProductRequest): CreateProductResponse {
    var entity = request.toEntity();
    var productId = this._productRepo.insert(entity);
    var response = new CreateProductResponse();

    response.productId = productId;
    return response;
  }

  edit(request: EditProductRequest): EditProductResponse {
    var entity = this._productRepo.selectById(request.productId);

    request.editEntity(entity);
    this._productRepo.update(entity);

    var response = new EditProductResponse();

    return response;
  }

  remove(request: RemoveProductRequest): RemoveProductResponse {
    this._productRepo.delete(request.productId);

    var response = new RemoveProductResponse();

    return response;
  }
}
