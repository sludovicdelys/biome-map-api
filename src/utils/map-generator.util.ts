import { MapConfig } from '../core/interfaces/map-config.interface';
import { GeneratedMap } from 'src/core/interfaces/generated-map.interface';
import { BiomePlacer } from '../core/interfaces/biome-placer.interface';

export class MapGenerator {
  constructor(private biomePlacer: BiomePlacer) {}

  generateMap(config: MapConfig): GeneratedMap {
    const biomePlacements = this.biomePlacer.placeBiomes(config);

    return {
      baseBiome: config.baseBiome,
      width: config.width,
      height: config.height,
      biomePlacements,
    };
  }
}
