import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('geo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('GeoService', 'GetGeoUserData')
  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.appService.findOne({ user_id: id });
  }
}
