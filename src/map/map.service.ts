import { Injectable } from '@nestjs/common';
import { MapConfig } from '../core/interfaces/map-config.interface';
import { MapGenerator } from '../utils/map-generator.util';
import { RandomBiomePlacer } from '../utils/random-biome-placer';
import { GeneratedMap } from '../core/interfaces/generated-map.interface';

@Injectable()
export class MapService {
  private mapGenerator: MapGenerator;

  constructor() {
    const biomePlacer = new RandomBiomePlacer();
    this.mapGenerator = new MapGenerator(biomePlacer);
  }
  generateMap(config: MapConfig): GeneratedMap {
    return this.mapGenerator.generateMap(config);
  }
}
