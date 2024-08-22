import {
  BiomePlacer,
  BiomePlacement,
} from '../core/interfaces/biome-placer.interface';
import { MapConfig } from 'src/core/interfaces/map-config.interface';

export class RandomBiomePlacer implements BiomePlacer {
  placeBiomes(config: MapConfig): BiomePlacement[] {
    const placements: BiomePlacement[] = [];
    const biomesToPlace = config.availableBiomes.filter(
      (biome) => biome.type !== config.baseBiome.type,
    );

    for (let i = 0; i < config.numberOfBiomes; i++) {
      const biome = biomesToPlace[i % biomesToPlace.length];
      const size =
        Math.floor(
          (Math.random() * Math.min(config.width, config.height)) / 4,
        ) + 2;
      placements.push({
        biome,
        x: Math.floor(Math.random() * (config.width - size)),
        y: Math.floor(Math.random() * (config.height - size)),
        size,
      });
    }
    return placements;
  }
}
