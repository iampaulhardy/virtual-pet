const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns a pet name, inital age of 0, inital hunger of 0, inital fitness of 10', () => {
      const pet = new Pet('Dave')
      expect(pet.name).toBe('Dave');
      expect(pet.age).toEqual(0);
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10)
    });
  });

describe('growUp', () => {
    it('increments the age by 1, hunger by 5, fitness by 3', () => {
      const pet = new Pet('Dave');
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('Dave');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
  });