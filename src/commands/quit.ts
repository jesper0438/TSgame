class Quit extends Command {
    /**
     * Print out error message when user enters unknown command.
     * 
     * 
     */

   execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Quit what?");
            return false;
        }
        else {
            return true;  // signal that we want to quit
        }
    }
}
    


