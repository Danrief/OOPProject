class Entity {
    constructor(type, hp, str, def) {
        this.type = type;
        this. hp = hp;
        this.str = str;
        this.def = def;
    }

    attack(target, weapon) {
        let Totaldamage = this.str + weapon.damagebuff;
        let Damage =  Totaldamage - (target.def / 100 * Totaldamage);
        target.hp -= Damage;
        console.log(`${target.name} has ${target.hp} left`);
        if (target.hp < 0 ) {
            target.death()
        }
    }

    death() {
        console.log(`${this.name} has died.`)
    }

    action() {
        console.log(`${this.name} performed an action!`)
    }

    DamageReaction() {
        console.log(`${this.name} takes this damage.`)
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

        death() {
            console.log(`Is this how my journey ends?`)
        }

        action() {
            console.log(`${this.name} performed a heroic action!`)
        }
        
        DamageReaction() {
        console.log(`Just a sratch!`)
        }
    }

    class NPC extends Entity {
    constructor(name, type, hp, str, def) {
        super(type, hp, str, def);
        this.name = name;
    }
}
class HostileNPC extends NPC {
    constructor(name, type, hp, str, def) {
        super(name, type, hp, str, def);
    }

    death() {
        console.log(`This is not over! I promise...`)
        entities[1] = entities[1].filter(element => element.name !== this.name)
    }

    action() {
        console.log(`${this.name} performed a mischievous action!`)
    }
    
    DamageReaction() {
        console.log(`You will regret this!`)
    }
}
class NonHostileNPC extends NPC {
    constructor(name, type, hp, str, def) {
        super(name, type, hp, str, def);
    }

    offerQuest() {
        console.log(`Would you like to help me for some gold, ${MainCharacter.name}?`);
        return true;
    }

    giveReward(PC) {
        if(this.offerQuest(PC)) {
        console.log(`Here you go, ${MainCharacter.name}!`);
        }
    }

    action() {
        console.log(`${this.name} performed a friendly action!`)
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

function test(){
    console.log("Test 1. Attack reduces enemy hp");
    MainCharacter.attack(hostile2, Sword)
    console.assert(hostile2.hp < 50);

    console.log("Tes2. Enemy death");
    MainCharacter.attack(hostile3, Sword);
    MainCharacter.attack(hostile3, Sword);
    console.assert(hostile3.hp <= 0);

    console.log("Test 3. Main character hp reduces");
    hostile1.attack(MainCharacter, Dagger);
    console.assert(MainCharacter.hp < 100);
    
    console.log("Test 4. Main characters death");
    MainCharacter.hp = 1;
    hostile1.attack(MainCharacter, Dagger);
    console.assert(MainCharacter.hp <= 0);

    console.log("Test 5. Non-hostile NPC quest offer");
    nonhostile.giveReward(MainCharacter);

    console.log("Test 6. Actions")
    MainCharacter.action();
    hostile1.action();
    nonhostile.action();

    console.log("Test 7. Damage reaction");
    MainCharacter.DamageReaction();
    hostile1.DamageReaction();
    nonhostile.DamageReaction();
}

test();