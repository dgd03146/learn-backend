import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return 'Home page';
  }

  @Get('post')
  getPost(): string {
    return 'Post page';
  }

  @Get('user')
  getUser(): string {
    return 'User page';
  }
}
