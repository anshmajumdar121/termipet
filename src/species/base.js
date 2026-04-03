/**
 * TermiPet - Base Species Class
  * All species extend this base class
   */

   class BasePetSpecies {
     constructor() {
         this.name = 'Unknown';
             this.rarity = 'common';
                 this.description = 'A mysterious creature';
                     this.sprite = [
                           '  (o.o)  ',
                                 '  (> <)  '
                                     ];
                                         this.color = 'white';
                                           }

                                             getSprite() {
                                                 return this.sprite;
                                                   }

                                                     getDescription() {
                                                         return this.description;
                                                           }

                                                             toString() {
                                                                 return `[${this.rarity.toUpperCase()}] ${this.name}`;
                                                                   }
                                                                   }

                                                                   module.exports = BasePetSpecies;
