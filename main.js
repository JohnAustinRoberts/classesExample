const Person = require('./classes/Person.js')


function main (){
    console.log('This is our main function.')

    const player1 = new Person("Bob","Cleric");
    console.log(player1.name);
    console.log(player1.type);
    console.log(player1.location);
    player1.introduce()


    const player2 = new Person("Sammy","Rogue",[1,2]);
    console.log(player2.name);
    console.log(player2.type);
    console.log(player2.location);
    player2.introduce()
    player2.updateX(5);
    player2.updateY(7);
    console.log(player2.location);
}
main();