import { Controller, Get, ForbiddenException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('exception')
  exception(): string {
    throw new ForbiddenException('error'); ;
  }
}
