import { Biome } from '../types/biome.type';

export interface MapConfig {
    availableBiome: Biome[],
	baseBiome: Biome,
	numberOfBiomes: number,
	width: number,
	height: number
}