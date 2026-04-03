/**
 * TermiPet - PRNG Engine
  * Mulberry32 algorithm (public domain) with TermiPet-specific seeding
   */

   class TermiPetPRNG {
     constructor(seed) {
         this.originalSeed = seed;
             this.state = seed;
               }

                 next() {
                     this.state |= 0;
                         this.state = this.state + 0x6D2B79F5 | 0;
                             var t = Math.imul(this.state ^ this.state >>> 15, 1 | this.state);
                                 t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
                                     return ((t ^ t >>> 14) >>> 0) / 4294967296;
                                       }

                                         nextInt(min, max) {
                                             return Math.floor(this.next() * (max - min + 1)) + min;
                                               }

                                                 choose(arr) {
                                                     if (!arr || arr.length === 0) return null;
                                                         return arr[Math.floor(this.next() * arr.length)];
                                                           }

                                                             weightedChoice(items, weights) {
                                                                 if (!items || items.length === 0) return null;
                                                                     if (!weights || weights.length !== items.length) return this.choose(items);
                                                                         let total = weights.reduce((sum, w) => sum + w, 0);
                                                                             let random = this.next() * total;
                                                                                 for (let i = 0; i < items.length; i++) {
                                                                                       random -= weights[i];
                                                                                             if (random <= 0) return items[i];
                                                                                                 }
                                                                                                     return items[items.length - 1];
                                                                                                       }
                                                                                                       
                                                                                                         reset() {
                                                                                                             this.state = this.originalSeed;
                                                                                                               }
                                                                                                               
                                                                                                                 getState() {
                                                                                                                     return this.state;
                                                                                                                       }
                                                                                                                       }
                                                                                                                       
                                                                                                                       function createSeedFromUserId(userId, salt = 'termipet-v1') {
                                                                                                                         let hash = 0;
                                                                                                                           const str = `${userId}$${salt}${userId}`;
                                                                                                                             for (let i = 0; i < str.length; i++) {
                                                                                                                                 const char = str.charCodeAt(i);
                                                                                                                                     hash = ((hash << 5) - hash) + char;
                                                                                                                                         hash = hash & hash;
                                                                                                                                           }
                                                                                                                                             return Math.abs(hash);
                                                                                                                                             }
                                                                                                                                             
                                                                                                                                             function createCompositeSeed(...inputs) {
                                                                                                                                               const combined = inputs.join('|');
                                                                                                                                                 return createSeedFromUserId(combined, '');
                                                                                                                                                 }
                                                                                                                                                 
                                                                                                                                                 module.exports = { TermiPetPRNG, createSeedFromUserId, createCompositeSeed };
