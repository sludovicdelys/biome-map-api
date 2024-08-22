import { Biome, BiomeType } from '../types/biome.type';

export const BIOMES: Record<BiomeType, Biome> = {
  plain: { type: 'plain', color: '#90EE90' },
  desert: { type: 'desert', color: '#FFD700' },
  forest: { type: 'forest', color: '#228B22' },
  ocean: { type: 'ocean', color: '#1E90FF' },
};
