import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Put,
  HttpCode,
  HttpStatus,
  Delete,
  Injectable,
  Inject,
} from '@nestjs/common';
import IProductService from '../services/product.service.interface';
import PagedProductList from './models/paged-product-list.model';
import SearchProductRequest from '../services/dto/search-product.request';
import GetProductRequest from '../services/dto/get-product.request';
import ProductModel from './models/product.model';
import CreateProductModel from './models/create-product.model';
import EditProductModel from './models/edit-product.model';
import RemoveProductRequest from '../services/dto/remove-product.request';

@Injectable()
@Controller('api/products')
export default class ProductController {
  constructor(
    @Inject('PRODUCT_SERVICE')
    private readonly _productService: IProductService,
  ) {}

  @Get()
  search(
    @Query('p') pageIndex: number,
    @Query('s') pageSize: number,
  ): PagedProductList {
    var request = new SearchProductRequest();

    request.pageIndex = pageIndex;
    request.pageSize = pageSize;

    var response = this._productService.search(request);
    var result = new PagedProductList(response);

    return result;
  }

  @Get()
  get(@Query('id') productId: string): ProductModel {
    var request = new GetProductRequest();

    request.productId = productId;

    var response = this._productService.get(request);
    var result = new ProductModel(response.product);

    return result;
  }

  @Post()
  create(@Body() model: CreateProductModel): string {
    var response = this._productService.create(model.toRequest());
    return response.productId;
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  edit(@Param('id') productId: string, @Body() model: EditProductModel) {
    // Because the product repository doesn't return anything so we can ignore the edit response handle
    this._productService.edit(model.toRequest(productId));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') productId: string) {
    var request = new RemoveProductRequest();

    request.productId = productId;
    // Because the product repository doesn't return anything so we can ignore the edit response handle
    this._productService.remove(request);
  }
}
