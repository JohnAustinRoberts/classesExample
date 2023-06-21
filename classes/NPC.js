const Person = require('./Person.js');

class NPC extends Person {
    
    
    constructor(name, type, location){
        super(name, type, location);
        NPC.NPC_TOTAL++;
    }
    static NPC_TOTAL = 0;
    static compareType(npc, player){
        if(npc.type === player.type){
            return "We're both " + player.type;
        } else {
            return "We're not the same type.";
        }
    }
}

module.exports = NPC;