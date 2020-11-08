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

  describe('feed', () => {
    it('Decreases fitness by 3', () => {
      const pet = new Pet('Dave');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('feel great', () => {
    it('I feel great!', () => {
      const pet = new Pet('Dave');
      pet.fitness = 4;
      pet.hunger = 4;
      pet.feeling();
      expect(pet.status).toEqual('I feel great!');
    });
  });

  describe('need a walk', () => {
    it('I need a walk', () => {
      const pet = new Pet('Dave');
      pet.fitness = 3;
      pet.feeling();
      expect(pet.status).toEqual('I need a walk');
    });
  });

  describe('hungry', () => {
    it('I am hungry', () => {
      const pet = new Pet('Dave');
      pet.hunger = 5;
      pet.feeling();
      expect(pet.status).toEqual('I am hungry');
    });
  });

  describe('hungry and need a walk', () => {
    it('I am hungry AND I need a walk', () => {
      const pet = new Pet('Dave');
      pet.fitness = 2;
      pet.hunger = 6;
      pet.feeling();
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