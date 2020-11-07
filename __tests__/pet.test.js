const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns a pet name', () => {
      const pet = new Pet('Dave')
      expect(pet.name).toBe('Dave');
    });
  });