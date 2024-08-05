import { Controller, Post, Body } from '@nestjs/common';
import { MapService } from './map.service';
import { MapConfigDto } from './dto/map-config.dto';

@Controller('map')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Post('generate')
  generateMap(@Body() config: MapConfigDto) {
    return this.mapService.generateMap(config);
  }
}