/**
 * TermiPet - Hatchery System
 * Handles pet creation, fetching, and species management
 */

const { TermiPetPRNG, createSeedFromUserId } = require('./prng.js');

// Import all species
const { PebblecrabSpecies, DustbunnySpecies, MossfrogSpecies, TwiglingSpecies, DewdropSpecies, PuddlefishSpecies } = require('../species/common');
const { CloudferretSpecies, GustowlSpecies, BramblebearSpecies, ThornfoxSpecies } = require('../species/uncommon');
const { CrystaldrakeSpecies, DeepstagSpecies, LavapupSpecies } = require('../species/rare');
const { StormwyrmSpecies, VoidcatSpecies, AetheringSpecies } = require('../species/epic');
const { CosmoshaleSpecies, NebulynxSpecies } = require('../species/legendary');

const RARITY_WEIGHTS = {
    common: 60,
        uncommon: 25,
        rare: 10,
        epic: 4,
        legendary: 1
      };

const SPECIES_REGISTRY = {
    common: [PebblecrabSpecies, DustbunnySpecies, MossfrogSpecies, TwiglingSpecies, DewdropSpecies, PuddlefishSpecies],
        uncommon: [CloudferretSpecies, GustowlSpecies, BramblebearSpecies, ThornfoxSpecies],
        rare: [CrystaldrakeSpecies, DeepstagSpecies, LavapupSpecies],
        epic: [StormwyrmSpecies, VoidcatSpecies, AetheringSpecies],
        legendary: [CosmoshaleSpecies, NebulynxSpecies]
      };

class TermiPetHatchery {
  constructor() {
    this.speciesRegistry = SPECIES_REGISTRY;
  }

  buildSpeciesMap() {
    const map = {};
    for (const [rarity, speciesList] of Object.entries(this.speciesRegistry)) {
      for (const Species of speciesList) {
                const instance = new Species();
        map[instance.name] = { rarity, Species };
}
}
    return map;
}

  buildRarityPool() {
    const pool = [];
    const weights = [];
    for (const [rarity, speciesList] of Object.entries(this.speciesRegistry)) {
      for (const Species of speciesList) {
                pool.push({ rarity, Species });
        weights.push(RARITY_WEIGHTS[rarity] / speciesList.length);
    }
    }
    return { pool, weights };
        }

  /**
   * Deterministically hatch a pet for a user
   */
  hatch(userId, options = {}) {
    const seed = createSeedFromUserId(userId, 'termipet-v1');
          const prng = new TermiPetPRNG(seed);
    const { pool, weights } = this.buildRarityPool();
    const chosen = prng.weightedChoice(pool, weights);
    const pet = new chosen.Species();
    const isShiny = prng.next() < 0.01;
    const stats = {
      DEBUGGING: prng.nextInt(0, 100),
      PATIENCE: prng.nextInt(0, 100),
      CHAOS: prng.nextInt(0, 100),
      WISDOM: prng.nextInt(0, 100),
      SNARK: prng.nextInt(0, 100)
};

    return {
      species: pet.name,
      rarity: chosen.rarity,
      isShiny,
      stats,
      userId,
      hatchedAt: new Date().toISOString()
};
}
}

module.exports = TermiPetHatchery;
