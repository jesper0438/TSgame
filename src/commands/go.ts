class Go extends Command {
/**
     * Print out error message when user enters unknown command.
     * 
     */
execute(params : string[]) : boolean {
        if(params.length == 0) {
            // if there is no second word, we don't know where to go...
            this.game.out.println("Go where?");
            return;
        }

        let direction = params[0];

        // Try to leave current room.
        let nextRoom = null;
        switch (direction) {
            case "north" : 
                nextRoom = this.game.currentRoom.northExit;
                break;
            case "east" : 
                nextRoom = this.game.currentRoom.eastExit;
                break;
            case "south" : 
                nextRoom = this.game.currentRoom.southExit;
                break;
            case "west" : 
                nextRoom = this.game.currentRoom.westExit;
                break;
            case "up" : 
                nextRoom = this.game.currentRoom.upExit;
                break;
            case "down" :
                nextRoom = this.game.currentRoom.downExit;
                break;
        }

        if (nextRoom == null) {
            this.game.out.println("There is no door!");
        }

              
        
        else {
            this.game.currentRoom = nextRoom;
            this.game.out.println("You are " + this.game.currentRoom.description);
            this.game.out.print("Exits: ");
            if(this.game.currentRoom.northExit != null) {
                this.game.out.print("north ");
            }
            if(this.game.currentRoom.eastExit != null) {
                this.game.out.print("east ");
            }
            if(this.game.currentRoom.southExit != null) {
                this.game.out.print("south ");
            }
            if(this.game.currentRoom.westExit != null) {
                this.game.out.print("west ");
            }    
            if(this.game.currentRoom.upExit != null) {
                this.game.out.print("up");
            }    
            if(this.game.currentRoom.downExit != null) {
                this.game.out.print("down");
            }
            
        
            this.game.out.println();
        }
        return false;
    }
}