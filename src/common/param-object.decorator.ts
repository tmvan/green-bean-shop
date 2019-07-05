import { Type, PipeTransform } from '@nestjs/common';

function _inner(
  memberName: string,
  paramName: string,
  ...pipes: Array<Type<PipeTransform> | PipeTransform>
): ParameterDecorator {
  return (target: object, propertyKey: string, parameterIndex: number) => {
    return undefined;
  };
}
