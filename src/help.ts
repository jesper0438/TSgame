class Help extends Command {
   
     execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Help what?");
            return false;
        }
        this.game.out.println("You are lost. You are alone. You wander");
        this.game.out.println("around at the university.");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("   go quit help");
        return false;
}
}