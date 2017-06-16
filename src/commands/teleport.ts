class Teleport extends Command {
    /**
     * Print out error message when user enters unknown command.
     * The player will be teleported to Smos after filling in teleport.
     * 
     */

   execute(params : string[]) : boolean {
       this.game.currentRoom = this.game.respawnRoom;
       this.game.out.println( "you are teleported  " + this.game.currentRoom.description);
       return false;
        
    }
}
    


