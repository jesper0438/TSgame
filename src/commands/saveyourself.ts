class Saveyourself extends Command {
    /**
     * Print out error message when user enters unknown command.
     * Another option for quiting the game. Game will restart after filling in.
     * 
     */

   execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Save what?");
            return false;
        }
        else {        
                 this.game.isOn = false;
                 this.game.out.println("You Saved Yourself From a lifetime in this room. But you failed to plant the flag.");
                 this.game.out.println("Press F5 to restart");
            }
        }
    }

    


