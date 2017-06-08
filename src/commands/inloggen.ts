class Inloggen extends Command {

execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Login what?");
            return false;
        }
        this.game.out.println("Are your files are encrypted");
        this.game.out.println("Please send 1BTC or $2933 to 1BoatSLRHtKNngkdXEeobR76b53LETtpyT");
        this.game.out.println("Are your files are encrypted");
        this.game.out.println("Please send 1BTC or $2933 to 1BoatSLRHtKNngkdXEeobR76b53LETtpyT");
        this.game.out.println("Are your files are encrypted");
        this.game.out.println("Belangrijke bestanden geproduceerd op uw computer, foto’s, video’s,")
        this.game.out.println(" documenten en dergelijke, werden geëncrypteerd. Hier is een volledige lijst van geëncrypteerde bestanden, en u kan dit persoonlijk verifiëren.")
        return false;
}
}