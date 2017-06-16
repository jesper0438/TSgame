class Look extends Command {
    /**
     * Print out error message when user enters unknown command.
     * If player enters Go Look , a description of his current location will show.
     * 
     */
    execute(params : string[]) : boolean {
    this.game.out.println("You are " + this.game.currentRoom.description);
    return false;}
}