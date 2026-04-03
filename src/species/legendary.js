/**
 * TermiPet - Legendary Species (1% roll chance)
 * Cosmoshale, Nebulynx
 */

const Base = require('./base');

class CosmoshaleSpecies extends Base {
    constructor() {
          super();
          this.name = 'Cosmoshale';
          this.rarity = 'legendary';
          this.description = 'A cosmic whale that swims through the digital cosmos';
          this.color = 'magenta';
          this.sprite = [
                  ' ..*..  ',
                  '(======)',
                  ' \\____/ '
                ];
    }
}

class NebulynxSpecies extends Base {
    constructor() {
          super();
          this.name = 'Nebulynx';
          this.rarity = 'legendary';
          this.description = 'A lynx born from the heart of a nebula';
          this.color = 'magenta';
          this.sprite = [
                  ' *(*.*)*',
                  '  (> <) ',
                  ' * |*| *'
                ];
    }
}

module.exports = { CosmoshaleSpecies, NebulynxSpecies };
