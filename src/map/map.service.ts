import { Injectable } from '@nestjs/common';
import { MapConfig } from '../core/interfaces/map-config.interfact';
import { generateMap } from '../utils/map-generator.util';

@Injectable()
export class MapService {
  generateMap(config: MapConfig) {
    return generateMap(config);
  }
}