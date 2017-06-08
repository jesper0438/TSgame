class Respawn extends Command {

   execute(params : string[]) : boolean {
       this.game.createRooms();
       this.game.currentRoom = this.game.respawnRoom;
       this.game.out.println( "you are " + this.game.currentRoom.description);
       return false;
        
    }
}
    


