import PagedList from '../../../common/paged-list.model';
import ProductModel from './product.model';
import SearchProductResponse from '../../services/dto/search-product.response';

export default class PagedProductList extends PagedList<ProductModel> {
  constructor(response: SearchProductResponse) {
    const data = response.data.map(x => new ProductModel(x));

    super(data, response);
  }
}
