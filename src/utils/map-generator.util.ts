import { MapConfig } from '../core/interfaces/map-config.interfact';
import { Biome } from '../core/types/biome.type';

function generateSeeds(biomes: Biome[], count: number, width: number, height: number): {biome: Biome, x: number, y: number}[] {
    const seeds: {biome: Biome, x: number, y: number}[] = [];
    for (let i = 0; i < count; i++) {
      seeds.push({
        biome: biomes[Math.floor(Math.random() * biomes.length)],
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
      });
    }
    return seeds;
}
  

function growBiomes(map: Biome[][], seeds: {biome: Biome, x: number, y: number}[], iterations: number) {
    const height = map.length;
    const width = map[0].length;
  
    for (let iter = 0; iter < iterations; iter++) {
      const newSeeds: {biome: Biome, x: number, y: number}[] = [];
  
      for (const seed of seeds) {
        map[seed.y][seed.x] = seed.biome;
        
        // Propager aux cellules adjacentes
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (const [dx, dy] of directions) {
          const newX = seed.x + dx;
          const newY = seed.y + dy;
          if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
            newSeeds.push({biome: seed.biome, x: newX, y: newY});
          }
        }
      }
  
      seeds = newSeeds;
    }
}


export function generateMap(config: MapConfig): Biome[][] {
    const { width, height, availableBiome, baseBiome, numberOfBiomes } = config;
    
    // 1. Initialiser la carte avec le biome de base
    const map: Biome[][] = Array(height).fill(null).map(() => 
      Array(width).fill(baseBiome)
    );
    
    // 2. Générer des "graines" pour chaque biome
    const biomesToPlace = availableBiome.filter(biome => biome !== baseBiome);
    const seeds = generateSeeds(biomesToPlace, numberOfBiomes, width, height);
    
    // 3. Faire croître les biomes à partir des graines
    growBiomes(map, seeds, 3); // 3 itérations de croissance
    
    return map;
}