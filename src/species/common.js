/**
 * TermiPet - Common Species (60% roll chance)
 * Pebblecrab, Dustbunny, Mossfrog, Twigling, Dewdrop, Puddlefish
 */

const Base = require('./base');

class PebblecrabSpecies extends Base {
    constructor() {
          super();
          this.name = 'Pebblecrab';
          this.rarity = 'common';
          this.description = 'A small crab that collects shiny pebbles';
          this.color = 'gray';
          this.sprite = ['  /o.o\\  ', ' (|---|) ', '  U   U  '];
    }
}

class DustbunnySpecies extends Base {
    constructor() {
          super();
          this.name = 'Dustbunny';
          this.rarity = 'common';
          this.description = 'A fluffy bunny made of swirling dust';
          this.color = 'white';
          this.sprite = [' (^.^) ', ' (> <) ', '  m m  '];
    }
}

class MossfrogSpecies extends Base {
    constructor() {
          super();
          this.name = 'Mossfrog';
          this.rarity = 'common';
          this.description = 'A frog covered in soft green moss';
          this.color = 'green';
          this.sprite = [' (@.@) ', ' (> <) ', '  ^ ^  '];
    }
}

class TwiglingSpecies extends Base {
    constructor() {
          super();
          this.name = 'Twigling';
          this.rarity = 'common';
          this.description = 'A tiny creature made of twigs and leaves';
          this.color = 'yellow';
          this.sprite = [' {^.^} ', '  /|\\ ', '  / \\ '];
    }
}

class DewdropSpecies extends Base {
    constructor() {
          super();
          this.name = 'Dewdrop';
          this.rarity = 'common';
          this.description = 'A glistening water sprite';
          this.color = 'cyan';
          this.sprite = ['  (o_o)  ', '  ( V )  ', '   |_|   '];
    }
}

class PuddlefishSpecies extends Base {
    constructor() {
          super();
          this.name = 'Puddlefish';
          this.rarity = 'common';
          this.description = 'A cheerful fish that lives in puddles';
          this.color = 'blue';
          this.sprite = [' ><(((o> ', '         '];
    }
}

module.exports = {
    PebblecrabSpecies,
    DustbunnySpecies,
    MossfrogSpecies,
    TwiglingSpecies,
    DewdropSpecies,
    PuddlefishSpecies
};
