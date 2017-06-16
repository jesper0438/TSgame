/**
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 * 
 * Users can walk around some scenery. That's all. It should really be 
 * extended to make it more interesting!
 * 
 * To play this game, create an instance of this class and call the "play"
 * method.
 * 
 * This main class creates and initialises all the others: it creates all
 * rooms, creates the parser and starts the game.  It also evaluates and
 * executes the commands that the parser returns.
 * 
 * @author  Michael Kölling, David J. Barnes and Bugslayer
 * @version 2017.03.30
 */
class Game {
    parser : Parser;
    out : Printer;

    currentRoom : Room;
    respawnRoom : Room;
    freedomRoom : Room;
    isOn : boolean;

    /**
     * Create the game and initialise its internal map.
     */
    constructor(output: HTMLElement, input: HTMLInputElement) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRooms();
        this.printWelcome();
        
    }

    /**
     * Create all the rooms and link their exits together.
     */
    createRooms() : void {
        // create the rooms
        let enterance = new Room("at the interance, welcome to the HZ-dungeon");
        let smos = new Room("At Smos, a overpriced sandwichstore, get out of here!!!")
        let lab = new Room("in a computing lab");
        let valkuil1 = new Room("Not paying atention. You fell from the roof! Please press F5 to restart the game.");
        let valkuil2 =  new Room("Trapped! You can use the 'teleport' command or restart de game!");
        let frontdesk = new Room("at the ladies from the frontdesk");
        let canteen = new Room("at the canteen");
        let sandwichsection = new Room("bij de broodjesafdeling, wat een keuze!");
        let elevator = new Room("in the elevator");
        let firstfloor = new Room("at the first floor");
        let roof = new Room("at the third floor, find the flag!");
        let secondfloor = new Room("at the second floor");
        let l202 = new Room("at L202");
        let l203 = new Room("at L203, don't get lost now...");
        let basement = new Room("at the basement, nothing to see here.");
        let breskens = new Room("in Zeeuws-Vlaanderen, game over... Please press F5 to restart and mind your steps...");
        let pc1 = new Room("computer1, type in login");
        let pc2 = new Room("computer2, type in inloggen or login");
        let freedom = new Room("freedom, you win!");
        let flag = new Room("at the flag. Type 'freedom' to plant the flag and finish.");
        

        // initialise room exits
        enterance.setExits(smos, frontdesk, null, null, null, null, null, null, null);
        smos.setExits(breskens, null, enterance, null, null, null, null, null, null);
        lab.setExits(pc2, pc1, canteen, null, null, null, null, null, null);
        valkuil1.setExits(null, null, null, null, null, null, null, null, null);
        valkuil2.setExits(null, null, null, null, null, null, null, null, null);
        frontdesk.setExits(null, canteen, elevator, enterance, null, null, null, null, null);
        sandwichsection.setExits(null, null, null, lab, null, null, null, null, null);
        canteen.setExits(lab, elevator, null, frontdesk, null, null, null, null, null);
        elevator.setExits(null, secondfloor, basement, canteen, firstfloor, basement, null, null, null);
        firstfloor.setExits(null, null, null, null, secondfloor, null, null, null, null);
        secondfloor.setExits(null, l202, null, null, roof, firstfloor, null, null, null);
        roof.setExits(null, flag, null, valkuil1, null, null, null, null, null);
        l202.setExits(null, l203, null, secondfloor, null, null, null, null, null);
        l203.setExits(null, null, null, l202, null, null, null, null, null);
        flag.setExits(null, null, null, null, null, null, freedom, null, null);
        pc1.setExits(null, null, null, null, null, null, null, null, null);
        pc2.setExits(null, null, null, null, null, null, null, null, null);
        basement.setExits(null, null, null, null, elevator, null, null, null, null);

        // spawn player outside
        this.currentRoom = enterance;
        // teleports player to Smos after typing "Teleport"
        this.respawnRoom = smos;
        // teleports player to Smos after typing "Teleport"
        this.freedomRoom = freedom;
    }
       
        
    /**
     * Print out the opening message for the player.
     */
    printWelcome() : void {
        this.out.println();
        this.out.println("You are in the HZ Dungeon of Applied Sciences");
        this.out.println("Plant the flag and get out as soon as possible!");
        this.out.println("First type instructions for an explanation.");
        this.out.println();
        this.out.println("You are " + this.currentRoom.description);
        this.out.print("Exits: ");
        if(this.currentRoom.northExit != null) {
            this.out.print("north ");
        }
        if(this.currentRoom.eastExit != null) {
            this.out.print("east ");
        }
        if(this.currentRoom.southExit != null) {
            this.out.print("south ");
        }
        if(this.currentRoom.westExit != null) {
            this.out.print("west ");
        }
        if(this.currentRoom.upExit != null) {
            this.out.print("up ");
        }
        if(this.currentRoom.downExit != null) {
            this.out.print("down ");
        }
        if(this.currentRoom.loginExit != null) {
            this.out.print("login ");
        }
        if(this.currentRoom.inloggenExit != null) {
            this.out.print("inloggen ");
        }
        this.out.println();
        this.out.print(">");
    }
     gameOver() : void {
        this.isOn = false;
        this.out.println("Thank you for playing.  Good bye.");
        this.out.println("Hit F5 to restart the game");
    }    
}