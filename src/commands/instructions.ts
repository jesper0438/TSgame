class Instructions extends Command {

execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Help what?");
            return false;
        }
        this.game.out.println("Your command words are:");
        this.game.out.println("Go | North, South, East, West, Up, Down,Teleport, or login.");
        this.game.out.println("Go to the roof with the elevator, plant the flag and teleport to freedom.");
  
        return false;
}
}