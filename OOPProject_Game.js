class Entity {
    constructor(type, hp, str, def) {
        this.type = type;
        this. hp = hp;
        this.str = str;
        this.def = def;
    }
}
class PC extends Entity {
    constructor(name, hp, str, def) {
        super("Main Character", hp, str, def);
        this.name = name;
        }
        AttackEnemy (EnemyName) { 
            EnemyName.hp = EnemyName.hp + (EnemyName.hp/100 * EnemyName.def) - this.str;
            console.log(EnemyName.hp);
            if(EnemyName.hp <= 0) {
                EnemyName.edeath();
            }
    }
        mcdeath() {
            console.log('Is this how my journey ends?');
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
            MainCharacter.hp = MainCharacter.hp + (MainCharacter/100 * MainCharacter.def) - this.str;
            console.log(MainCharacter.hp);
            if(MainCharacter.hp <= 0 ) {
                MainCharacter.mcdeath();
            } 
        }
        edeath() {
            console.log('This is not over... I promise!');
        }
}
class NonHostileNPX extends NPC {
    OfferQuest() {
        console.log('Would you like to help me for some gold, ${MainCharacter.name}?');
        return true;
    }
    GiveReward(PC) {
        if(this.OfferQuest(PC)) {
        console.log('Here you go, ${MainCharacter.name}!');
        }
    }
}

let MainCharacter = new PC("Ethan", 100, 10, 5);