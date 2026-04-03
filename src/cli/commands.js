#!/usr/bin/env node
/**
   * TermiPet - CLI Command Interface
   * Usage: termipet <command>
   */

const TermiPetHatchery = require('../core/hatchery');
const { renderPet } = require('../renderer/theme');
const os = require('os');
const fs = require('fs');
const path = require('path');

const SAVE_FILE = path.join(os.homedir(), '.termipet.json');

function loadPet() {
    try {
          if (fs.existsSync(SAVE_FILE)) {
                  return JSON.parse(fs.readFileSync(SAVE_FILE, 'utf8'));
          }
    } catch (e) {}
    return null;
}

function savePet(pet) {
    fs.writeFileSync(SAVE_FILE, JSON.stringify(pet, null, 2));
}

function getOrCreateUserId() {
    const configFile = path.join(os.homedir(), '.termipet-id');
    if (fs.existsSync(configFile)) {
          return fs.readFileSync(configFile, 'utf8').trim();
    }
    const id = `user-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    fs.writeFileSync(configFile, id);
    return id;
}

const command = process.argv[2] || 'help';
const hatchery = new TermiPetHatchery();

switch (command) {
  case 'hatch': {
        const existing = loadPet();
        if (existing) {
                console.log('\n  You already have a pet! Use "termipet show" to see it.');
                console.log('  (Delete ~/.termipet.json to start over)\n');
                break;
        }
        const userId = getOrCreateUserId();
        const pet = hatchery.hatch(userId);
        savePet(pet);
        console.log('\n  🥚 Hatching your TermiPet...');
        console.log(renderPet(pet));
        console.log(`  Welcome, ${pet.isShiny ? '✨ Shiny ' : ''}${pet.species}!\n`);
        break;
  }

  case 'show': {
        const pet = loadPet();
        if (!pet) {
                console.log('\n  No pet found! Run "termipet hatch" first.\n');
                break;
        }
        console.log(renderPet(pet));
        break;
  }

  case 'stats': {
        const pet = loadPet();
        if (!pet) {
                console.log('\n  No pet found! Run "termipet hatch" first.\n');
                break;
        }
        console.log('\n  📊 Pet Stats:');
        console.log(renderPet(pet));
        console.log(`  Hatched: ${pet.hatchedAt}`);
        console.log(`  Rarity: ${pet.rarity.toUpperCase()}`);
        if (pet.isShiny) console.log('  ✨ SHINY!');
        console.log('');
        break;
  }

  case 'watch': {
        const pet = loadPet();
        if (!pet) {
                console.log('\n  No pet found! Run "termipet hatch" first.\n');
                break;
        }
        console.log('\n  👀 Watching your pet... (Press Ctrl+C to stop)\n');
        const frames = ['(^.^)', '(^_^)', '(-.-)', '(o.o)', '(>.<)'];
        let i = 0;
        setInterval(() => {
                process.stdout.write('\r  ' + frames[i % frames.length] + ' ' + pet.species + '    ');
                i++;
        }, 500);
        break;
  }

  case 'feed': {
        const pet = loadPet();
        if (!pet) {
                console.log('\n  No pet found! Run "termipet hatch" first.\n');
                break;
        }
        pet.lastFed = new Date().toISOString();
        pet.hunger = Math.max(0, (pet.hunger || 50) - 20);
        savePet(pet);
        console.log(`\n  🍖 You fed ${pet.species}! Nom nom nom~\n`);
        break;
  }

  case 'play': {
        const pet = loadPet();
        if (!pet) {
                console.log('\n  No pet found! Run "termipet hatch" first.\n');
                break;
        }
        pet.lastPlayed = new Date().toISOString();
        pet.happiness = Math.min(100, (pet.happiness || 50) + 15);
        savePet(pet);
        const playAnims = ['*bounces*', '*spins*', '*does a flip*', '*chases tail*', '*stares at cursor*'];
        const anim = playAnims[Math.floor(Math.random() * playAnims.length)];
        console.log(`\n  🎮 ${pet.species} ${anim}\n`);
        break;
  }

  case 'help':
  default: {
        console.log(`
          TermiPet 🐾 - Your terminal companion

            Commands:
                hatch    Hatch your first TermiPet
                    show     Display your current pet
                        stats    Show detailed pet statistics
                            watch    Watch your pet animate
                                feed     Feed your pet
                                    play     Play with your pet

                                      Example:
                                          termipet hatch
                                              termipet show
                                                  termipet feed
                                                      `);
  }
}
