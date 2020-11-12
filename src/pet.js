const MAXIMUM_FITNESS = 10;
const WALK_FITNESS = 4;
const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;
const GROWTH_AGE = 1;
const GROWTH_HUNGER = 5;
const GROWTH_FITNESS = 3;
const FEED_HUNGER = 3;
const MINIMUM_HUNGER = 0;  

function Pet(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
    this.status = '';
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

Pet.prototype.adoptChild = function(child) {
    this.children.push(child);
}

Pet.prototype.haveBaby = function (child) {
    console.log(this);
    const result = new Pet(child);
    console.log(result);
    this.children.push(result);
    console.log(this);
}

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.age +=GROWTH_AGE;
    this.hunger +=GROWTH_HUNGER;
    this.fitness -=GROWTH_FITNESS;
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.fitness + WALK_FITNESS) <= MAXIMUM_FITNESS ) {
        this.fitness += WALK_FITNESS;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
}

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.hunger - FEED_HUNGER) >= MINIMUM_HUNGER ) {
        this.hunger -= FEED_HUNGER;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
};

Pet.prototype.checkUp = function() {
    if (this.age > 30 || this.hunger > 10 || this.fitness < 0) {
        this.status = 'Your pet is no longer alive :(';
    } else if (this.fitness > GROWTH_FITNESS && this.hunger < GROWTH_HUNGER) {
        this.status = 'I feel great!';
    } else if (this.fitness <= GROWTH_FITNESS && this.hunger >= GROWTH_HUNGER) {
        this.status = 'I am hungry AND I need a walk';
    } else if (this.fitness <= GROWTH_FITNESS) {
        this.status = 'I need a walk';
    } else if (this.hunger >= GROWTH_HUNGER) {
        this.status = 'I am hungry';
    }
};

Pet.prototype.isAlive = function() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }

module.exports = Pet;