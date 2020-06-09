import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class RequestValidationPipe implements PipeTransform {
  constructor(private readonly schema: any) {}

  transform(val: any) {
    const { error, value } = this.schema.validate(val);
    if (error) {
      throw new BadRequestException('Request validation failed', error.message);
    }
    return value;
  }
}
