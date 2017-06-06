class Command {
    
    game : Game;
    constructor(game: Game)
    {
        this.game = game;
    }

    /**
     *  @param params array
     *  @return true
     */
    public execute(params : string[]) : boolean
    {
        return false;
    }
}