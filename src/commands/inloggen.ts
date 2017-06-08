class Inloggen extends Command {

execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Login what?");
            return false;
        }
        this.game.out.println("Are your files are encrypted");
        this.game.out.println();  
        return false;
}
}