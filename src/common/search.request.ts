export default abstract class SearchRequest {
  public pageIndex: number;
  public pageSize: number;

  public offset(): number {
    return Math.round((this.pageIndex - 1) * this.pageSize);
  }

  public limit(): number {
    return Math.round(this.pageSize);
  }
}
