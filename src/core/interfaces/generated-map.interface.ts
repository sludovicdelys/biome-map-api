import { Biome } from '../types/biome.type';
import { BiomePlacement } from './biome-placer.interface';

export interface GeneratedMap {
  baseBiome: Biome;
  width: number;
  height: number;
  biomePlacements: BiomePlacement[];
}
