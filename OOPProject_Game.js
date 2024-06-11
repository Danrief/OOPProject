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
            let Totaldamage = this.str + ShortSword.damagebuff; 
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
            let Totaldamage = this.str + Dagger.damagebuff;
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
class NonHostileNPX extends NPC {
    offerQuest() {
        console.log(`Would you like to help me for some gold, ${MainCharacter.name}?`);
        return true;
    }
    giveReward(PC) {
        if(this.OfferQuest(PC)) {
        console.log(`Here you go, ${MainCharacter.name}!`);
        }
    }
}

let MainCharacter = new PC("Ethan", 100, 10, 5);
let hostile1 = new HostileNPC("hostile1","hostileNPC", 80, 15, 3);
let hostile2 = new HostileNPC("hostile2","hostileNPC", 50, 15, 3);
let hostile3 = new HostileNPC("hostile3","hostileNPC", 30, 15, 3);
let ShortSword = new Weapon("Sword", 30);
let Dagger = new Weapon("Dagger", 15);

let entities = [
    [MainCharacter],
    [hostile1, hostile2, hostile3],
]; 

entities[0].forEach(entity => {
    entity.attackEnemy(hostile2)
});

console.log(entities)
