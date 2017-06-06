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
    Teleport : Room;

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
        let valkuil1 = new Room("Trapped! Game Over. Please press F5 to restart and mind your steps...");
        let valkuil2 =  new Room("Trapped! Game Over. Please press F5 to restart and mind your steps...");
        let frontdesk = new Room("Bij de dames van de receptie");
        let canteen = new Room("At the canteen");
        let sandwichsection = new Room("bij de broodjesafdeling, wat een keuze!");
        let elevator = new Room("bij de lift");
        let firstfloor = new Room("At the first floor");
        let secondfloor = new Room("At the second floor");
        let l202 = new Room("at L202");
        let l203 = new Room("at L203, don't get lost now...");
        let basement = new Room("at the basement, nothing to see here.");
        let breskens = new Room("In Zeeuws-Vlaanderen, game over... Please press F5 to restart and mind your steps...");
        let pc1 = new Room("Computer1");
        let pc2 = new Room("Computer2")
        let freedom = new Room("Free, you win!")
        let flag = new Room("At the flag, congratz! Telport now")

        // initialise room exits
        enterance.setExits(smos, frontdesk, valkuil1, null, null, null, freedom);
        smos.setExits(breskens, null, enterance, null, null, null, null);
        lab.setExits(pc2, pc1, canteen, null, null, null, null);
        valkuil1.setExits(null, null, null, null, null, null, null);
        valkuil2.setExits(null, null, null, null, null, null, null);
        frontdesk.setExits(null, canteen, null, enterance, null, null, null);
        sandwichsection.setExits(null, null, null, lab, null, null, null);
        canteen.setExits(lab, null, elevator, frontdesk, null, null, null);
        elevator.setExits(firstfloor, secondfloor, basement, null, basement, null, null);
        firstfloor.setExits(secondfloor, null, null, null, null, null, null);
        secondfloor.setExits(firstfloor, null, null, null, null, null, null);
        l202.setExits(secondfloor, l203, null, null, null, null, null);
        l203.setExits(firstfloor, null, null, null, null, null, null);
        flag.setExits(null, null, null, null, null, null, freedom);
        freedom.setExits(null, null, null, null, null, null, null);

        // spawn player outside
        this.currentRoom = enterance;


    }
       
        
    /**
     * Print out the opening message for the player.
     */
    printWelcome() : void {
        this.out.println();
        this.out.println("You are in the HZ Dungeon of Applied Sciences");
        this.out.println("Plant the flag and get out as soon as possible!");
        this.out.println("Type 'help' if you need help.");
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
        if(this.currentRoom.teleportExit != null) {
            this.out.print("teleport ");
        }
        this.out.println();
        this.out.print(">");
    }

 gameOver() : void {
        this.isOn = false;
        this.out.println("Thank you for playing.  Good bye.");
        this.out.println("Hit F5 to restart the game");
    }    

    /**
     * Print out error message when user enters unknown command.
     * Here we print some erro message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */

   
       

    /** 
     * Try to go in one direction. If there is an exit, enter
     * the new room, otherwise print an error message.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    goRoom(params : string[]) : boolean {
        if(params.length == 0) {
            // if there is no second word, we don't know where to go...
            this.out.println("Go where?");
            return;
        }

        let direction = params[0];

        // Try to leave current room.
        let nextRoom = null;
        switch (direction) {
            case "north" : 
                nextRoom = this.currentRoom.northExit;
                break;
            case "east" : 
                nextRoom = this.currentRoom.eastExit;
                break;
            case "south" : 
                nextRoom = this.currentRoom.southExit;
                break;
            case "west" : 
                nextRoom = this.currentRoom.westExit;
                break;
            case "up" : 
                nextRoom = this.currentRoom.upExit;
                break;
        }

        if (nextRoom == null) {
            this.out.println("There is no door!");
        }
        
        
        else {
            this.currentRoom = nextRoom;
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
            this.out.println();
        }
        return false;
    }
    
    /** 
     * "Quit" was entered. Check the rest of the command to see
     * whether we really quit the game.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    quit(params : string[]) : boolean {
        if(params.length > 0) {
            this.out.println("Quit what?");
            return false;
        }
        else {
            return true;  // signal that we want to quit
        }
    }
     look(params : string[]) : boolean {
        this.out.println("You are " + this.currentRoom.description);
    }
}