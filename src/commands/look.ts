class Look extends Command
{
    execute(params : string[]) : boolean {
    this.game.out.println("You are " + this.game.currentRoom.description);
    }
}