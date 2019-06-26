import SearchResponse from './search.response';

export default abstract class PagedList<T> {
  constructor(response: SearchResponse<T>) {
    this.data = response.data;
    this.totalCount = response.totalCount;
    this.totalPage = response.totalPage;
    this.pageIndex = response.pageIndex;
    this.pageSize = response.pageSize;
  }

  public data: T[];
  public totalCount: number;
  public totalPage: number;
  public pageIndex: number;
  public pageSize: number;
}
