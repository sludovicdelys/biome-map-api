import { MapConfig } from '../core/interfaces/map-config.interfact';
import { Biome } from '../core/types/biome.type';

function placeBiomeZone(biomeMap: Biome[][], biome: Biome) {
  const height = biomeMap.length;
  const width = biomeMap[0].length;
  
  // Choisir un point de départ aléatoire
  const startX = Math.floor(Math.random() * width);
  const startY = Math.floor(Math.random() * height);
  
  // Définir une taille aléatoire pour la zone (entre 2 et 5)
  const zoneSize = 2 + Math.floor(Math.random() * 4);
  
  // Placer la zone de biome
  for (let y = startY; y < Math.min(startY + zoneSize, height); y++) {
    for (let x = startX; x < Math.min(startX + zoneSize, width); x++) {
      biomeMap[y][x] = biome;
    }
  }
}


export function generateMap(config: MapConfig): Biome[][] {
  const { width, height, availableBiome, baseBiome, numberOfBiomes } = config;
  
  // 1. Initialiser la carte avec le biome de base
  const map: Biome[][] = Array(height).fill(null).map(() => 
    Array(width).fill(baseBiome)
  );
  
  // 2. Générer des zones pour chaque biome
  const biomesToPlace = availableBiome.filter(biome => biome !== baseBiome);
  for (let i = 0; i < numberOfBiomes - 1; i++) {  // -1 car le baseBiome est déjà placé
    const biome = biomesToPlace[i % biomesToPlace.length];
    placeBiomeZone(map, biome);
  }
  
  return map;
}