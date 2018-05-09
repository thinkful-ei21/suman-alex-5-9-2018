'use strict'
function createCharacter(name, nickName, race, origin, attack, defense, weapon){
    return {
        name: name,
        nickName: nickName,
        race: race,
        origin: origin,
        attack: attack,
        defense: defense,
        weapon: weapon,
        describe: function(){console.log(`${this.name} is a ${this.race} from ${this.origin} who uses the ${weapon}`)},
        evaluateFight: function(obj){
            let x = obj.defense - this.attack < 0? Math.abs(obj.defense - this.attack): 0;
            let y = this.defense - obj.attack < 0? Math.abs(this.defense - obj.attack): 0;
            return `Your opponent take ${x} damage and you recieve ${y} damage`;
        }
    }
}
let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'ring');
let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'String and Barrow Blade');
let frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'Anduril');
let aragorn = createCharacter('Aragorn son of Arathorn','aragorn','Man','Dunnedain',6,8,'Bow and Arrow');
let legolas = createCharacter('Legolas','legolas','Elf','Woodland Realm',8,5, 'Hadhafang');
console.log(bilbo.evaluateFight(gandalf));
let characters = [gandalf, bilbo, frodo, aragorn, legolas];
characters.push(createCharacter('Arwen Undomiel', 'arry', 'Half-Elf', 'Rivendell', 6, 3));
characters.find(function(z){return z.nickName === 'aragorn'}).describe();
let hobbitArr = characters.filter(function(z){return z.race === 'Hobbit'});
//console.log(hobbitArr);
let attackAbove5Arr = characters.filter(function(z){return z.attack > 5});
//console.log(attackAbove5Arr);

