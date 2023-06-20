class Person {
    constructor(name, type, location){
        this.name=name;
        this.type=type;
        this.location=location || [0,0];
    }
    introduce() {
        let str = 'Hello! My name is ' + this.name + ". I am a " + this.type + '.';
        console.log(str);
        return str;
    }
    updateX(val) {
        this.location[0] += val;
    }
    updateY(val) {
        this.location[1] += val;
    }

}



module.exports = Person;