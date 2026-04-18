const Character = require('./Character');
const Team = require('./Team');

const archer = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const swordsman = new Character('Мечник', 'Swordsman', 60, 2, 50, 15);
const magician = new Character('Маг', 'Magician', 40, 1, 30, 20);

const team = new Team();
team.add(archer);
team.add(swordsman);
team.add(magician);

for (const character of team) {
    console.log(character.name);
}