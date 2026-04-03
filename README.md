# TermiPet 🐾

> An educational, themeable terminal companion framework with a gacha-style pet system. Hatch, raise, and interact with your very own terminal pet!
>
> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
> [![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-green)](https://nodejs.org)
>
> **Live Preview:** [https://anshmajumdar121.github.io/termipet](https://anshmajumdar121.github.io/termipet)
>
> ---
>
> ## What is TermiPet?
>
> TermiPet is an open-source, educational Node.js project inspired by classic Tamagotchi games. It runs entirely in your terminal and teaches concepts like:
>
> - **Pseudo-random number generation** (Mulberry32 PRNG)
> - - **Deterministic gacha systems** (same user always gets the same pet)
>   - - **CLI tool design** with Node.js
>     - - **Themeable rendering** with chalk
>       - - **Event-driven architecture**
>        
>         - Your pet's species is determined by a seed derived from your user ID — so it's always the same for you, but unique to you!
>        
>         - ---
>
> ## Species & Rarity
>
> | Rarity | Chance | Species |
> |--------|--------|---------|
> | Common | 60% | Pebblecrab, Dustbunny, Mossfrog, Twigling, Dewdrop, Puddlefish |
> | Uncommon | 25% | Cloudferret, Gustowl, Bramblebear, Thornfox |
> | Rare | 10% | Crystaldrake, Deepstag, Lavapup |
> | Epic | 4% | Stormwyrm, Voidcat, Aetherling |
> | Legendary | 1% | Cosmoshale, Nebulynx |
>
> There's also a **1% shiny chance** independent of rarity. Good luck! ✨
>
> ---
>
> ## Installation
>
> ```bash
> # Clone the repo
> git clone https://github.com/anshmajumdar121/termipet.git
> cd termipet
>
> # Install dependencies
> npm install
>
> # Link globally so you can use the 'termipet' command anywhere
> npm link
> ```
>
> ---
>
> ## Commands
>
> | Command | Description |
> |---------|-------------|
> | `termipet hatch` | Hatch your first TermiPet |
> | `termipet show` | Display your current pet |
> | `termipet watch` | Watch your pet animate live |
> | `termipet stats` | Show detailed pet statistics |
> | `termipet feed` | Feed your pet |
> | `termipet play` | Play with your pet |
>
> ### Quick Start
>
> ```bash
> termipet hatch    # Hatch your pet (deterministic - yours is unique to you!)
> termipet show     # See your pet displayed with full stats
> termipet feed     # Feed it!
> termipet play     # Play with it!
> termipet stats    # Full stats breakdown
> termipet watch    # Live animation mode
> ```
>
> ---
>
> ## Project Structure
>
> ```
> termipet/
> ├── package.json
> ├── README.md
> └── src/
>     ├── index.js
>     ├── core/
>     │   ├── prng.js          # Mulberry32 PRNG engine
>     │   ├── hatchery.js      # Pet creation & species management
>     │   └── events.js        # Event bus system
>     ├── species/
>     │   ├── base.js          # Base species class
>     │   ├── common.js        # Common tier species
>     │   ├── uncommon.js      # Uncommon tier species
>     │   ├── rare.js          # Rare tier species
>     │   ├── epic.js          # Epic tier species
>     │   └── legendary.js     # Legendary tier species
>     ├── renderer/
>     │   └── theme.js         # Theme & display system
>     └── cli/
>         └── commands.js      # CLI interface
> themes/
>     └── example-theme.js     # Example custom theme
> tests/
>     └── test.js              # Test suite
> ```
>
> ---
>
> ## Custom Themes
>
> Copy `themes/example-theme.js` and modify it to create your own theme:
>
> ```js
> module.exports = {
>   name: 'my-theme',
>   rarityColors: {
>     common: 'blue',
>     legendary: 'red'
>   }
> };
> ```
>
> ---
>
> ## Run Tests
>
> ```bash
> npm test
> ```
>
> ---
>
> ## How It Works
>
> 1. **PRNG**: Uses the Mulberry32 algorithm seeded from your user ID to generate deterministic results
> 2. 2. **Hatchery**: Weighted random selection across all species/rarities using the PRNG
>    3. 3. **Renderer**: Chalk-based colorized output with rarity-specific colors
>       4. 4. **CLI**: Node.js switch-based command router with persistent save file at `~/.termipet.json`
>         
>          5. ---
>         
>          6. ## Contributing
>         
>          7. Pull requests are welcome! To add a new species:
>
> 1. Add your class to the appropriate rarity file in `src/species/`
> 2. 2. Register it in `src/core/hatchery.js`
>    3. 3. Add a test in `tests/test.js`
>      
>       4. ---
>      
>       5. ## License
>      
>       6. MIT © TermiPet Contributors
