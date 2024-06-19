class Entity {
    constructor(type, hp, str, def) {
        this.type = type;
        this. hp = hp;
        this.str = str;
        this.def = def;
    }
}

class Weapon {
    constructor(type, damagebuff) {
        this.type = type;
        this.damagebuff = damagebuff;
    }
}

class PC extends Entity {
    constructor(name, hp, str, def) {
        super("Main Character", hp, str, def);
        this.name = name;
        }
        attackEnemy (EnemyName) { 
            let Totaldamage = this.str + Weapon.damagebuff; 
            EnemyName.hp = EnemyName.hp + (EnemyName.hp/100 * EnemyName.def) - Totaldamage;
            console.log(EnemyName.hp);
            if(EnemyName.hp <= 0) {
                EnemyName.edeath();
            }
    }
        mcdeath() {
            console.log(`Is this how my journey ends?`);
    }
    }
class NPC extends Entity {
    constructor(name, type, hp, str, def) {
        super(type, hp, str, def);
        this.name = name;
    }
}
class HostileNPC extends NPC {
        attack() {
            let Totaldamage = this.str + Weapon.damagebuff;
            MainCharacter.hp = MainCharacter.hp + (MainCharacter/100 * MainCharacter.def) - Totaldamage;
            console.log(MainCharacter.hp);
            if(MainCharacter.hp <= 0 ) {
                MainCharacter.mcdeath();
            } 
        }
        edeath() {
            console.log(`This is not over... I promise!`);
            for(let i = 0; i<entities[1].length;i++){
                if(this.name == entities[1][i].name){
                    entities[1] = entities[1].filter(element => element.name !== "hostile1");
                  break;
        }
    }
        }
}
class NonHostileNPC extends NPC {
    offerQuest() {
        console.log(`Would you like to help me for some gold, ${MainCharacter.name}?`);
        return true;
    }
    giveReward(PC) {
        if(this.offerQuest(PC)) {
        console.log(`Here you go, ${MainCharacter.name}!`);
        }
    }
}

let MainCharacter = new PC("Ethan", 100, 10, 5);
let hostile1 = new HostileNPC("hostile1","Bandit", 80, 15, 3);
let hostile2 = new HostileNPC("hostile2","Bandit", 50, 15, 3);
let hostile3 = new HostileNPC("hostile3","Bandit", 30, 15, 3);
let nonhostile = new NonHostileNPC("Nonhostile", "Villager", 30, 0, 1);
let Sword = new Weapon("Short Sword", 30);
let Dagger = new Weapon("Dagger", 15);

let entities = [
    [MainCharacter],
    [hostile1, hostile2, hostile3],
]; 

entities[0].forEach(entity => {
    entity.attackEnemy(hostile2)
});

function test(){
    console.log("Test 1. Attack reduces enemy hp");
    MainCharacter.attackEnemy(hostile2)
    console.assert(hostile2.hp < 50);

    console.log("Tes2. Enemy death");
    MainCharacter.attackEnemy(hostile3);
    MainCharacter.attackEnemy(hostile3);
    console.assert(hostile3.hp <= 0);

    console.log("Test 3. Main character hp reduces");
    hostile1.attack();
    console.assert(MainCharacter.hp < 100);
    
    console.log("Test 4. Main characters death");
    MainCharacter.hp = 1;
    hostile1.attack();
    console.assert(MainCharacter.hp <= 0);

    console.log("Test 5. Non-hostile NPC quest offer");
    nonhostile.giveReward(MainCharacter);
}

test();