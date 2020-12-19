import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HomeController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'hello world';
  }
}
