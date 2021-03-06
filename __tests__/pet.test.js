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
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Dave');
      pet.age = 30;
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('Dave');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Dave');
      pet.fitness = -1;
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('feed', () => {
    it('Decreases fitness by 3', () => {
      const pet = new Pet('Dave');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Dave');
      pet.hunger = 11;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('feel great', () => {
    it('I feel great!', () => {
      const pet = new Pet('Dave');
      pet.fitness = 4;
      pet.hunger = 4;
      pet.checkUp();
      expect(pet.status).toEqual('I feel great!');
    });

    it('Your pet is dead!', () => {
      const pet = new Pet('Dave');
      pet.fitness = -1;
      pet.hunger = 11;
      pet.age = 31;
      pet.checkUp();
      expect(pet.status).toEqual('Your pet is no longer alive :(');
     });
  });

  describe('need a walk', () => {
    it('I need a walk', () => {
      const pet = new Pet('Dave');
      pet.fitness = 3;
      pet.checkUp();
      expect(pet.status).toEqual('I need a walk');
    });
  });

  describe('hungry', () => {
    it('I am hungry', () => {
      const pet = new Pet('Dave');
      pet.hunger = 5;
      pet.checkUp();
      expect(pet.status).toEqual('I am hungry');
    });
  });

  describe('hungry and need a walk', () => {
    it('I am hungry AND I need a walk', () => {
      const pet = new Pet('Dave');
      pet.fitness = 2;
      pet.hunger = 6;
      pet.checkUp();
      expect(pet.status).toEqual('I am hungry AND I need a walk');
    });
  });

  describe('Pet is Alive', () => {
    it('I am Alive', () => {
      const pet = new Pet('Dave');
      pet.fitness = 1;
      pet.hunger = 9;
      pet.age = 29;
      expect(pet.isAlive).toEqual(true);
    });
  });

  describe('Pet is Dead', () => {
    it('I am Dead', () => {
      const pet = new Pet('Dave');
      pet.fitness = 0;
      pet.hunger = 10;
      pet.age = 30;
      expect(pet.isAlive).toEqual(false);
    });
  });

  describe('Adopt a child', () => {
    it('Adopt a child', () => {
      const parent = new Pet('Dave');
      const child = new Pet('Amelie');
      parent.adoptChild(child);
      expect(parent.children).toEqual(expect.objectContaining([{"age": 0, "children": [], "fitness": 10, "hunger": 0, "name": "Amelie", "status": ""}]));
    });
  });

  describe('Have a baby', () => {
    it('Have a baby', () => {
      const parent = new Pet('Dave');
      parent.haveBaby('Amelie');
      expect(parent.children).toEqual(([{"age": 0, "children": [], "fitness": 10, "hunger": 0, "name": "Amelie", "status": ""}]));
    });
  });