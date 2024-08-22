export type BiomeType = 'plain' | 'desert' | 'forest' | 'ocean';

export interface Biome {
  type: BiomeType;
  color: string;
}
