class Inloggen extends Command {

execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Login what?");
            return false;
        }
        this.game.out.println("Are your files are encrypted");
        this.game.out.println("Please send 1BTC(2854 dollar) to my wallet: 1BoatSLRHtKNngkdXEeobR76b53LETtpyT");
        this.game.out.println("Are your files are encrypted");
        this.game.out.println("Belangrijke bestanden geproduceerd op uw computer, foto’s, video’s,")
        this.game.out.println(" documenten en dergelijke, zijn geëncrypt. Hier is een volledige lijst van geëncrypteerde bestanden, en u kan dit persoonlijk verifiëren:.")
        this.game.out.println(".pdf .txt .doc .docx .jpg .jpeg .png .wmv .mpeg .mpeg2 .mp4 .mp3 .zip .csv .avi .xls .odt .rtf");
        this.game.out.println("Pay the amount of money to receive the decription key. Whitin 48-hours the price will double. After 72 hours, all data will be destroyed!");
        return false;
}
}