/**
 * TermiPet - Test Suite
 * Run with: node tests/test.js
 */

const { TermiPetPRNG, createSeedFromUserId } = require('../src/core/prng');
const TermiPetHatchery = require('../src/core/hatchery');
const { renderPet } = require('../src/renderer/theme');

let passed = 0;
let failed = 0;

function assert(condition, message) {
    if (condition) {
          console.log(`  ✅ ${message}`);
          passed++;
    } else {
          console.log(`  ❌ FAIL: ${message}`);
          failed++;
    }
}

console.log('\ntermipet/');
console.log('├── src/');
console.log('|   ├── core/          # Core systems (PRNG, hatchery, events)');
console.log('|   ├── species/       # All pet species definitions');
console.log('|   ├── renderer/      # Theme and display system');
console.log('|   └── cli/           # Command-line interface');
console.log('├── themes/            # Custom themes');
console.log('└── tests/             # Test suite');

console.log('\n--- Running Tests ---\n');

// Test PRNG
const tp = require('../src/core/prng');
console.log('PRNG Tests:');
const prng = new tp.TermiPetPRNG(42);
assert(typeof prng.next() === 'number', 'PRNG.next() returns a number');
assert(prng.next() >= 0 && prng.next() <= 1, 'PRNG.next() returns value between 0 and 1');
assert(prng.nextInt(1, 10) >= 1, 'PRNG.nextInt() returns at least min');
assert(prng.nextInt(1, 10) <= 10, 'PRNG.nextInt() returns at most max');
assert(prng.choose(['a','b','c']) !== null, 'PRNG.choose() returns a value');

// Test seed determinism
const seed1 = tp.createSeedFromUserId('test-user', 'termipet-v1');
const seed2 = tp.createSeedFromUserId('test-user', 'termipet-v1');
assert(seed1 === seed2, 'Same userId always produces same seed');

// Test Hatchery
console.log('\nHatchery Tests:');
const hatchery = new TermiPetHatchery();
const pet = hatchery.hatch('test-user-123');
assert(pet !== null, 'Hatchery produces a pet');
assert(typeof pet.species === 'string', 'Pet has a species name');
assert(['common','uncommon','rare','epic','legendary'].includes(pet.rarity), 'Pet has valid rarity');
assert(typeof pet.isShiny === 'boolean', 'Pet has shiny flag');
assert(pet.stats && typeof pet.stats.DEBUGGING === 'number', 'Pet has DEBUGGING stat');
assert(pet.stats && typeof pet.stats.PATIENCE === 'number', 'Pet has PATIENCE stat');
assert(pet.stats && typeof pet.stats.CHAOS === 'number', 'Pet has CHAOS stat');

// Test determinism
const pet2 = hatchery.hatch('test-user-123');
assert(pet.species === pet2.species, 'Same userId always hatches same species');
assert(pet.rarity === pet2.rarity, 'Same userId always hatches same rarity');

// Test renderer
console.log('\nRenderer Tests:');
const rendered = renderPet(pet);
assert(typeof rendered === 'string', 'renderPet() returns a string');
assert(rendered.length > 0, 'renderPet() returns non-empty string');
assert(rendered.includes(pet.species), 'Rendered output contains species name');

console.log('\n--- Results ---');
console.log(`  Passed: ${passed}`);
console.log(`  Failed: ${failed}`);
console.log(`  Total: ${passed + failed}`);

if (failed === 0) {
    console.log('\n  🎉 All tests passed!\n');
    process.exit(0);
} else {
    console.log('\n  ⚠️  Some tests failed.\n');
    process.exit(1);
}
