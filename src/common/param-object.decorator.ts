import { Type, PipeTransform } from "@nestjs/common";

// export declare function ParamObjectDecorator(...pipes: (Type<PipeTransform> | PipeTransform)[]) : ParameterDecorator {
//   return _inner(null, null, ...pipes);
// }

// export declare function ParamObjectDecorator(memberName: string, ...pipes: (Type<PipeTransform> | PipeTransform)[]) : ParameterDecorator {
//   return _inner(memberName, memberName, ...pipes);
// }

// export declare function ParamObjectDecorator(memberName: string, paramName: string, ...pipes: (Type<PipeTransform> | PipeTransform)[]) : ParameterDecorator {
//   return _inner(memberName, paramName, ...pipes);
// }

function _inner(memberName: string, paramName: string, ...pipes: (Type<PipeTransform> | PipeTransform)[]) : ParameterDecorator {
  return function (target: Object, propertyKey: string, parameterIndex: number) {

  }
}