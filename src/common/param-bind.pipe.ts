import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ParamBindPipe implements PipeTransform<any> {
  private _memberName: string;
  private _paramName: string;

  constructor(memberName: string, paramName: string = null) {
    this._memberName = memberName;
    this._paramName = paramName || memberName;
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
