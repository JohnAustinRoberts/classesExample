const Person = require('./Person.js');

class Player extends Person {
    constructor(name, type, location, weapon){
        super(name, type, location);
        this.weapon=weapon;
    }
};


module.exports = Player;