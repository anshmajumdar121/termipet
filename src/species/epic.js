/**
 * TermiPet - Epic Species (4% roll chance)
 * Stormwyrm, Voidcat, Aetherling
 */

const Base = require('./base');

class StormwyrmSpecies extends Base {
    constructor() {
          super();
          this.name = 'Stormwyrm';
          this.rarity = 'epic';
          this.description = 'A serpent woven from lightning and storm clouds';
          this.color = 'magenta';
          this.sprite = [' ~*~*~ ', '(=====)', ' ~*~*~ '];
    }
}

class VoidcatSpecies extends Base {
    constructor() {
          super();
          this.name = 'Voidcat';
          this.rarity = 'epic';
          this.description = 'A cat that peers into the void between terminals';
          this.color = 'magenta';
          this.sprite = [' (*.*) ', ' (> <) ', '   |   '];
    }
}

class AetheringSpecies extends Base {
    constructor() {
          super();
          this.name = 'Aetherling';
          this.rarity = 'epic';
          this.description = 'A being of pure aetheric energy';
          this.color = 'cyan';
          this.sprite = [' {*.*} ', '  |||  ', ' /___\\ '];
    }
}

module.exports = { StormwyrmSpecies, VoidcatSpecies, AetheringSpecies };
