/**
 * TermiPet - Events System
  * Handles pet lifecycle events and interactions
   */

   const EVENT_TYPES = {
     HATCH: 'hatch',
       FEED: 'feed',
         PLAY: 'play',
           SLEEP: 'sleep',
             EVOLVE: 'evolve',
               MOOD_CHANGE: 'mood_change'
               };

               class EventEmitter {
                 constructor() {
                     this.listeners = {};
                       }

                         on(event, callback) {
                             if (!this.listeners[event]) {
                                   this.listeners[event] = [];
                                       }
                                           this.listeners[event].push(callback);
                                               return this;
                                                 }

                                                   off(event, callback) {
                                                       if (!this.listeners[event]) return this;
                                                           this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
                                                               return this;
                                                                 }

                                                                   emit(event, data) {
                                                                       if (!this.listeners[event]) return;
                                                                           this.listeners[event].forEach(cb => cb(data));
                                                                             }
                                                                             }

                                                                             class PetEventBus extends EventEmitter {
                                                                               constructor() {
                                                                                   super();
                                                                                     }

                                                                                       onHatch(cb) { return this.on(EVENT_TYPES.HATCH, cb); }
                                                                                         onFeed(cb) { return this.on(EVENT_TYPES.FEED, cb); }
                                                                                           onPlay(cb) { return this.on(EVENT_TYPES.PLAY, cb); }
                                                                                             onSleep(cb) { return this.on(EVENT_TYPES.SLEEP, cb); }
                                                                                               onEvolve(cb) { return this.on(EVENT_TYPES.EVOLVE, cb); }
                                                                                                 onMoodChange(cb) { return this.on(EVENT_TYPES.MOOD_CHANGE, cb); }

                                                                                                   emitHatch(pet) { this.emit(EVENT_TYPES.HATCH, pet); }
                                                                                                     emitFeed(data) { this.emit(EVENT_TYPES.FEED, data); }
                                                                                                       emitPlay(data) { this.emit(EVENT_TYPES.PLAY, data); }
                                                                                                         emitSleep(data) { this.emit(EVENT_TYPES.SLEEP, data); }
                                                                                                           emitEvolve(data) { this.emit(EVENT_TYPES.EVOLVE, data); }
                                                                                                             emitMoodChange(data) { this.emit(EVENT_TYPES.MOOD_CHANGE, data); }
                                                                                                             }
                                                                                                             
                                                                                                             module.exports = { EVENT_TYPES, EventEmitter, PetEventBus };
