const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns a pet name, inital age of 0', () => {
      const pet = new Pet('Dave')
      expect(pet.name).toBe('Dave');
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Dave');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });