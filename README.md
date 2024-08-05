# Eco Impact Map Generator API

## Description

Cette API a été développée dans le cadre d'un test technique pour Eco Impact. Elle permet de générer des cartes aléatoires basées sur une configuration donnée, en utilisant différents biomes.

## Caractéristiques principales

- Génération de cartes aléatoires basées sur une configuration
- Utilisation de NestJS pour une architecture robuste et extensible
- Implémentation en TypeScript pour un typage fort
- Validation des entrées avec class-validator
- Séparation claire des responsabilités (contrôleurs, services, logique métier)

## Installation

```bash
npm install
```

## Lancement de l'application

```bash
npm run start
```

Pour le mode développement avec rechargement automatique : 

```bash
npm run start:dev
```

## Tests

```bash
npm run test
```

## Structure du projet 

```
src/
|── core/
|   |── constants/
|       └── biomes.ts
│   ├── interfaces/
│   │   └── map-config.interface.ts
│   └── types/
│       └── biome.type.ts
├── map/
│   ├── dto/
│   │   └── map-config.dto.ts
│   ├── map.controller.ts
│   ├── map.service.ts
│   └── map.module.ts
├── utils/
│   └── map-generator.util.ts
└── app.module.ts
```

## Choix techniques 
* NestJS : Choisi pour sa structure modulaire et son support de TypeScript
* TypeScript : Utilisé pour améliorer la maintenabilité et réduire les erreurs potentielles
* `class-validator` : Utilisé pour une validation robuste des entrées 
