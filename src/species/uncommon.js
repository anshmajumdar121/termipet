/**
 * TermiPet - Uncommon Species (25% roll chance)
 * Cloudferret, Gustowl, Bramblebear, Thornfox
 */

const Base = require('./base');

class CloudferretSpecies extends Base {
    constructor() {
          super();
          this.name = 'Cloudferret';
          this.rarity = 'uncommon';
          this.description = 'A fluffy ferret that drifts through clouds';
          this.color = 'white';
          this.sprite = [' (^..^) ', '  /UU\\ ', '  ~ww~  '];
    }
}

class GustowlSpecies extends Base {
    constructor() {
          super();
          this.name = 'Gustowl';
          this.rarity = 'uncommon';
          this.description = 'An owl that rides wind currents';
          this.color = 'yellow';
          this.sprite = [' (O,O) ', ' (|--|) ', '  "  "  '];
    }
}

class BramblebearSpecies extends Base {
    constructor() {
          super();
          this.name = 'Bramblebear';
          this.rarity = 'uncommon';
          this.description = 'A bear whose fur is made of brambles';
          this.color = 'green';
          this.sprite = [' {^.^} ', ' (> <) ', '  UUU  '];
    }
}

class ThornfoxSpecies extends Base {
    constructor() {
          super();
          this.name = 'Thornfox';
          this.rarity = 'uncommon';
          this.description = 'A cunning fox with thorn-tipped tail';
          this.color = 'red';
          this.sprite = [' /^.^\\ ', ' (> <) ', '   ~|  '];
    }
}

module.exports = { CloudferretSpecies, GustowlSpecies, BramblebearSpecies, ThornfoxSpecies };
