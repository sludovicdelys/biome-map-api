import { IsArray, IsEnum, IsInt, Min } from 'class-validator';
import { Biome } from '../../core/types/biome.type';
import { BIOMES } from '../../core/constants/biomes';

export class MapConfigDto {
  @IsArray()
  @IsEnum(BIOMES, { each: true })
  availableBiomes: Biome[];

  @IsEnum(BIOMES)
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
