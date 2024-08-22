# Map Generator - Back-end

## Overview

This NestJS application serves as the back-end for the Eco Impact Map Generator technical interview. It handles the logic for generating random biome maps based on provided configurations.

## Technologies Used

- NestJS
- TypeScript
- Class Validator (for DTO validation)

## Setup and Installation

1. Ensure you have Node.js (version 14 or later) installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install all dependencies.

## Running the Application

- Development mode: `npm run start:dev`
- Production mode: `npm run start:prod`

## Project Structure

- `src/`
  - `map/`: Map module (controller, service, DTOs)
  - `core/`: Core types and interfaces
  - `utils/`: Utility functions including map generation logic
  - `main.ts`: Application entry point

## API Endpoints

- POST `/map/generate`: Generates a new map based on provided configuration

## Key Features

- Robust map generation algorithm
- Input validation using DTOs
- Modular architecture for easy extension

## Future Improvements

- Implement caching mechanism for generated maps
- Add more complex biome generation rules
- Implement tests

## Contributing

Contributions are welcome. Please fork the repository and submit pull requests for any enhancements.
