class Login extends Command {

execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Login to what?");
            return false;
        }
        this.game.out.println("Je bent ingelogd op computer 2.");
        this.game.out.println();  
        return false;
        
        
}
}