class Saveyourself extends Command {

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

    


