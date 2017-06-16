class Instructions extends Command {
     /**
     * Print out error message when user enters unknown command.
     * Here we send a message with instructions to play the game.
     * 
     */

execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Help what?");
            return false;
        }
        this.game.out.println("Your command words are:");
        this.game.out.println("Go | North, South, East, West, Up, Down,Teleport, or login.");
        this.game.out.println("Go to the roof with the elevator, plant the flag and teleport to freedom.");
  
        return false;
}
}