class Look extends Command
{
    execute(params : string[]) : boolean {
    this.out.println("You are " + this.currentRoom.description);
    }
}