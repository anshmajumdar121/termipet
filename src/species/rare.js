/**
 * TermiPet - Rare Species (10% roll chance)
 * Crystaldrake, Deepstag, Lavapup
 */

const Base = require('./base');

class CrystaldrakeSpecies extends Base {
    constructor() {
          super();
          this.name = 'Crystaldrake';
          this.rarity = 'rare';
          this.description = 'Dragon of living crystal';
          this.color = 'cyan';
          this.sprite = [' <*.*> ', '  /|\\ ', ' // \\\\ '];
        }
  }

class DeepstagSpecies extends Base {
    constructor() {
          super();
          this.name = 'Deepstag';
          this.rarity = 'rare';
          this.description = 'Majestic stag from terminal depths';
          this.color = 'blue';
          this.sprite = [' Y(^.^)Y ', '  (| |)  ', '  // \\\\  '];
        }
  }

class LavapupSpecies extends Base {
    constructor() {
          super();
          this.name = 'Lavapup';
          this.rarity = 'rare';
          this.description = 'A puppy born in volcanic vents';
          this.color = 'red';
          this.sprite = [' (~.~) ', '  (UU) ', '   ww  '];
        }
  }

module.exports = { CrystaldrakeSpecies, DeepstagSpecies, LavapupSpecies };
