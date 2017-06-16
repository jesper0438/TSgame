class Freedom extends Command {
/**
     * Print out error message when user enters unknown command.
     * Here we send a message that the player is teleported to freedom and wins the game.
     * 
     */
   execute(params : string[]) : boolean {
       this.game.currentRoom = this.game.freedomRoom;
       this.game.out.println( "you are teleported to " + this.game.currentRoom.description);
       return false;
        
    }
}
    


