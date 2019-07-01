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
  UsePipes,
} from '@nestjs/common';
import IProductService from '../services/product.service.interface';
import PagedProductList from './models/paged-product-list.model';
import ProductModel from './models/product.model';
import GetProductRequest from '../services/dto/get-product.request';
import CreateProductModel from './models/create-product.model';
import EditProductModel from './models/edit-product.model';
import RemoveProductRequest from '../services/dto/remove-product.request';
import { ValidationPipe } from '../../common/validation.pipe';
import { SearchProductModel } from './models/search-product.model';
//import { ParamBindPipe } from '../../common/param-bind.pipe';

@Injectable()
@Controller('api/products')
export default class ProductController {
  constructor(
    @Inject('PRODUCT_SERVICE')
    private readonly _productService: IProductService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    //new ParamBindPipe('pageIndex', 'p'),
    //new ParamBindPipe('pageSize', 's'),
    new ValidationPipe())
  search(
    model: SearchProductModel,
  ): PagedProductList {
    const request = model.toRequest();

    const response = this._productService.search(request);
    const result = new PagedProductList(response);

    return result;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  get(@Query('id') productId: string): ProductModel {
    const request = new GetProductRequest();

    request.productId = productId;

    const response = this._productService.get(request);
    const result = new ProductModel(response.product);

    return result;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body(new ValidationPipe()) model: CreateProductModel): string {
    const request = model.toRequest();
    const response = this._productService.create(request);

    return response.productId;
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  edit(@Param('id') productId: string, @Body(new ValidationPipe()) model: EditProductModel) {
    const request = model.toRequest(productId);

    // Because the product repository doesn't return anything so we can ignore the edit response handle
    this._productService.edit(request);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') productId: string) {
    const request = new RemoveProductRequest();

    request.productId = productId;
    // Because the product repository doesn't return anything so we can ignore the edit response handle
    this._productService.remove(request);
  }
}
