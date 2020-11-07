const MAXIMUM_FITNESS = 10;
const WALK_FITNESS = 4;
const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;
const GROWTH_AGE = 1;
const GROWTH_HUNGER = 5;
const GROWTH_FITNESS = 3;  

function Pet(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function() {
    this.age +=GROWTH_AGE;
    this.hunger +=GROWTH_HUNGER;
    this.fitness -=GROWTH_FITNESS;
};

Pet.prototype.walk = function() {
    if ((this.fitness + WALK_FITNESS) <= MAXIMUM_FITNESS ) {
        this.fitness += WALK_FITNESS;
    } else {
        this.fitness = MAXIMUM_FITNESS
    }
}

module.exports = Pet;