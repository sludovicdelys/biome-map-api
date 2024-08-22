import { Biome } from '../types/biome.type';

export interface MapConfig {
  availableBiomes: Biome[];
  baseBiome: Biome;
  numberOfBiomes: number;
  width: number;
  height: number;
}
