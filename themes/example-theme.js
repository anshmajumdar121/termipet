/**
 * TermiPet - Example Custom Theme
 * Copy this file and modify to create your own theme!
 * Usage: compile --theme ./themes/example-theme.js
 */

module.exports = {
    name: 'ocean',
    description: 'A deep ocean theme with blue tones',

    // Color overrides per rarity
    rarityColors: {
          common: 'blue',
          uncommon: 'cyan',
          rare: 'magenta',
          epic: 'yellow',
          legendary: 'white'
    },

    // Border characters
    borders: {
          topLeft: '╔',
          topRight: '╗',
          bottomLeft: '╚',
          bottomRight: '╝',
          horizontal: '═',
          vertical: '║'
    },

    // Custom stat bar characters
    statBar: {
          filled: '▓',
          empty: '░'
    },

    // Custom messages
    messages: {
          hatch: 'A creature rises from the depths...',
          feed: 'The ocean provides...',
          play: 'Waves of joy!'
    }
};
