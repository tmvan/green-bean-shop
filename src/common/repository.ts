export default interface IRepository<T> {
  selectAll(offset: number, limit: number): T[];
  selectById(productId: string): T;
  count(): number;
  insert(product: T): string;
  update(product: T): void;
  delete(productId: string): void;
}
