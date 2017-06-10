class Teleport extends Command {

   execute(params : string[]) : boolean {
       this.game.currentRoom = this.game.respawnRoom;
       this.game.out.println( "you are teleported  " + this.game.currentRoom.description);
       return false;
        
    }
}
    


