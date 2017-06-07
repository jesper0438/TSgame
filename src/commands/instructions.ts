class Instructions extends Command {

execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Help what?");
            return false;
        }
        this.game.out.println("around at the university.");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("Go | North, South, East, West, Up, Down,Teleport, or login.");
        this.game.out.println("around at the university.");
  
        return false;
}
}