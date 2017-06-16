class Help extends Command {
  /**
     * Print out error message when user enters unknown command.
     * Here we send a message with options to go further.
     * 
     */
     execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Help what?");
            return false;
        }

        this.game.out.println("Your command words are:");
        this.game.out.println("   go quit help look saveyourself teleport");
        this.game.out.println("   If you're lost, use the teleport function.");
        
        return false;
}
}