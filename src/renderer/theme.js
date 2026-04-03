/**
 * TermiPet - Theme and Display System
 * Handles rendering pets with colors and themes
 */

let chalk;
try {
    chalk = require('chalk');
} catch (e) {
    chalk = { 
          white: (s) => s, gray: (s) => s, green: (s) => s, yellow: (s) => s,
          cyan: (s) => s, blue: (s) => s, red: (s) => s, magenta: (s) => s,
          bold: { white: (s) => s, gray: (s) => s, green: (s) => s, yellow: (s) => s,
                              cyan: (s) => s, blue: (s) => s, red: (s) => s, magenta: (s) => s }
    };
}

const RARITY_COLORS = {
    common: 'white',
    uncommon: 'green',
    rare: 'cyan',
    epic: 'magenta',
    legendary: 'yellow'
};

const DEFAULT_THEME = {
    name: 'default',
    background: null,
    border: chalk.gray,
    text: chalk.white,
    accent: chalk.cyan
};

function applyColor(text, color) {
    if (chalk[color]) return chalk[color](text);
    return text;
}

function renderPet(pet, theme = DEFAULT_THEME) {
    const rarityColor = RARITY_COLORS[pet.rarity] || 'white';
    const colorFn = chalk[rarityColor] || chalk.white;
    const shinyPrefix = pet.isShiny ? chalk.yellow('✨ SHINY ') : '';
    const lines = [];

  lines.push('');
    lines.push(colorFn(`  ╔════════════════════╗`));
    lines.push(colorFn(`  ║`) + ` ${shinyPrefix}${colorFn(pet.species.padEnd(18))}` + colorFn(` ║`));
    lines.push(colorFn(`  ║`) + ` ${chalk.gray(('[' + pet.rarity.toUpperCase() + ']').padEnd(18))}` + colorFn(` ║`));
    lines.push(colorFn(`  ╚════════════════════╝`));

  if (pet.sprite) {
        pet.sprite.forEach(line => lines.push('    ' + colorFn(line)));
  } else {
        lines.push('    ' + colorFn('  (^.^)  '));
        lines.push('    ' + colorFn('  (> <)  '));
  }

  lines.push('');
    if (pet.stats) {
          lines.push(chalk.gray('  Stats:'));
          Object.entries(pet.stats).forEach(([stat, val]) => {
                  const bar = '█'.repeat(Math.floor(val / 10)) + '░'.repeat(10 - Math.floor(val / 10));
                  lines.push(`    ${stat.padEnd(12)} ${colorFn(bar)} ${val}`);
          });
    }
    lines.push('');

  return lines.join('\n');
}

function renderStats(pet) {
    return renderPet(pet);
}

module.exports = { renderPet, renderStats, RARITY_COLORS, DEFAULT_THEME };
