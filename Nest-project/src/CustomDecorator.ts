

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UpperCase = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const value = request.body?.value || '';
    return value.toUpperCase();
  },
);
