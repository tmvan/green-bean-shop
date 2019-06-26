export default abstract class SearchResponse<T> {
  private _data: T[];
  private _totalCount: number;
  private _totalPage: number;
  private _pageIndex: number;
  private _pageSize: number;

  constructor(
    data: T[],
    totalCount: number,
    pageIndex: number,
    pageSize: number,
  ) {
    this._data = data;
    this._totalCount = totalCount;
    this._pageIndex = pageIndex;
    this._pageSize = pageSize;
    this._totalPage = Math.ceil(this._totalCount / this._pageSize);
  }

  public get data(): T[] {
    return this._data;
  }

  public get totalPage(): number {
    return this._totalPage;
  }

  public get pageIndex(): number {
    return this._pageIndex;
  }

  public get pageSize(): number {
    return this._pageSize;
  }

  public get totalCount(): number {
    return this._totalCount;
  }
}
