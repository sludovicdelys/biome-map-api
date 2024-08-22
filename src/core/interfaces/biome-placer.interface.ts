import { Biome } from '../types/biome.type';
import { MapConfig } from './map-config.interface';

export interface BiomePlacement {
  biome: Biome;
  x: number;
  y: number;
  size: number;
}

export interface BiomePlacer {
  placeBiomes(config: MapConfig): BiomePlacement[];
}
