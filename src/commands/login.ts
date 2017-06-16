class Login extends Command {
/**
     * Print out error message when user enters unknown command.
     * This is a trap, player receives a message and needs to teleport.
     * 
     */
execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Login to what?");
            return false;
        }
        this.game.out.println("You are logged in. Please type teleport to go further.");
        this.game.out.println();  
        return false;
        
        
}
}