import SearchProductRequest from "../../services/dto/search-product.request";
import { IsInt, Min } from "class-validator";
import { Query } from "@nestjs/common";

export class SearchProductModel {
  @IsInt()
  @Min(1)
  public pageSize: number;

  @IsInt()
  @Min(1)
  public pageIndex: number;

  public toRequest() : SearchProductRequest {
    const request = new SearchProductRequest();

    request.pageIndex = this.pageIndex;
    request.pageSize = this.pageSize;

    return request;
  }
}