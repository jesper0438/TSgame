class Freedom extends Command {

   execute(params : string[]) : boolean {
       this.game.currentRoom = this.game.freedomRoom;
       this.game.out.println( "you are teleported to " + this.game.currentRoom.description);
       return false;
        
    }
}
    


