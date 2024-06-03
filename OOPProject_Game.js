class Entity {
    constructor(type, hp, str, def) {
        this.type = type
        this. hp = hp
        this.str = str
        this.def = def
    }
}
class PC extends Entity {
    constructor(name, hp, str, def) {
        super("Main Character", hp, str, def)
        this.name = name
    }
}
class NPC extends Entity {
    constructor(name, type, hp, str, def) {
        super(type, hp, str, def)
        this.name = name
    }
}
class HostileNPC extends NPC {

}
class NonHostileNPX extends NPC {
    OfferQuest() {
        console.log('Would you like to help me for some gold, ${MainCharacter.name}?')
    }
}

let MainCharacter = new PC("Ethan", 100, 10, 5)
