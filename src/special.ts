class Special {
    description : string;

    askforhelp : Special;
    teleport : Special;
    plantflag : Special;


setSpecials(askforhelp : Special, teleport : Special, plantflag : Special) : void {
    if(north != null) {
            this.northExit = north;
        }
        if(east != null) {
            this.eastExit = east;
        }
        if(south != null) {
            this.southExit = south;
        }
        if(west != null) {
            this.westExit = west;
        }
        if(up != null) {
            this.upExit = up;
        }
}
}


    

