import IPaginatetable from './paginatetable.interface';

export default class PagedList<T> implements IPaginatetable {
  constructor(data: T[], other: IPaginatetable) {
    this.data = data;
    this.pageIndex = other.pageIndex;
    this.pageSize = other.pageSize;
    this.totalCount = other.totalCount;
  }

  public data: T[];
  public totalCount: number;
  public pageIndex: number;
  public pageSize: number;
}
