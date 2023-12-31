import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('transcode')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async transcode() {
    return this.appService.transcode();
  }
}
