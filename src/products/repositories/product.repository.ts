import IProductRepository from './product.repository.interface';
import Product from './entities/product.entity';

export default class ProductRepository implements IProductRepository {
  private static readonly _products: Product[] = [];
  private static _nextId: number = 1;

  private collection(): Product[] {
    return ProductRepository._products;
  }

  private nextId(): string {
    var id = ProductRepository._nextId++;
    return 'product-' + id;
  }

  private selectByIdPredicate(productId: string) {
    return function(value: Product, index: number, obj: Product[]) {
      return value.id == productId;
    };
  }

  disable(productId: string): void {
    var entity = this.selectById(productId);

    entity.disabled = true;
  }

  enable(productId: string): void {
    var entity = this.selectById(productId);

    entity.disabled = false;
  }

  selectAll(offset: number, limit: number): Product[] {
    return this.collection().slice(offset, offset + limit);
  }

  selectById(productId: string): Product {
    return this.collection().find(this.selectByIdPredicate(productId));
  }

  count(): number {
    return this.collection().length;
  }

  insert(product: Product): string {
    product.id = this.nextId();
    this.collection().push(product);
    return product.id;
  }

  update(product: Product): void {
    var entity = this.selectById(product.id);

    entity.name = product.name;
    entity.description = product.description;
    entity.price = product.price;
    entity.disabled = product.disabled;
  }

  delete(productId: string): void {
    var index = this.collection().findIndex(
      this.selectByIdPredicate(productId),
    );

    if (index > -1) {
      this.collection().splice(index, 1);
    }
  }
}
