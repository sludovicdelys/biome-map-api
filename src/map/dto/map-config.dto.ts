import { IsArray, IsEnum, IsInt, Min } from 'class-validator';
import { Biome } from '../../core/types/biome.type';
import { Biomes } from '../../core/constants/biomes';

export class MapConfigDto {
    @IsArray()
    @IsEnum(Biomes, { each: true })
    availableBiome: Biome[];
  
    @IsEnum(Biomes)
    baseBiome: Biome;
  
    @IsInt()
    @Min(1)
    numberOfBiomes: number;
  
    @IsInt()
    @Min(1)
    width: number;
  
    @IsInt()
    @Min(1)
    height: number;
}