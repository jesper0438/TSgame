var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Command = (function () {
    function Command(game) {
        this.game = game;
    }
    Command.prototype.execute = function (params) {
        return false;
    };
    return Command;
}());
var Default = (function (_super) {
    __extends(Default, _super);
    function Default() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Default.prototype.execute = function (params) {
        this.game.out.println("I don't know what you mean...");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("   go quit help saveyourself look teleport");
        return false;
    };
    return Default;
}(Command));
var Game = (function () {
    function Game(output, input) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRooms();
        this.printWelcome();
    }
    Game.prototype.createRooms = function () {
        var enterance = new Room("at the interance, welcome to the HZ-dungeon");
        var smos = new Room("At Smos, a overpriced sandwichstore, get out of here!!!");
        var lab = new Room("in a computing lab");
        var valkuil1 = new Room("Not paying atention. You fell from the roof! Please press F5 to restart the game.");
        var valkuil2 = new Room("Trapped! You can use the 'teleport' command or restart de game!");
        var frontdesk = new Room("at the ladies from the frontdesk");
        var canteen = new Room("at the canteen");
        var sandwichsection = new Room("bij de broodjesafdeling, wat een keuze!");
        var elevator = new Room("in the elevator");
        var firstfloor = new Room("at the first floor");
        var roof = new Room("at the third floor, find the flag!");
        var secondfloor = new Room("at the second floor");
        var l202 = new Room("at L202");
        var l203 = new Room("at L203, don't get lost now...");
        var basement = new Room("at the basement, nothing to see here.");
        var breskens = new Room("in Zeeuws-Vlaanderen, game over... Please press F5 to restart and mind your steps...");
        var pc1 = new Room("computer1, type in login");
        var pc2 = new Room("computer2, type in inloggen or login");
        var freedom = new Room("freedom, you win!");
        var flag = new Room("at the flag. Type 'freedom' to plant the flag and finish.");
        enterance.setExits(smos, frontdesk, null, null, null, null, null, null, null);
        smos.setExits(breskens, null, enterance, null, null, null, null, null, null);
        lab.setExits(pc2, pc1, canteen, null, null, null, null, null, null);
        valkuil1.setExits(null, null, null, null, null, null, null, null, null);
        valkuil2.setExits(null, null, null, null, null, null, null, null, null);
        frontdesk.setExits(null, canteen, elevator, enterance, null, null, null, null, null);
        sandwichsection.setExits(null, null, null, lab, null, null, null, null, null);
        canteen.setExits(lab, elevator, null, frontdesk, null, null, null, null, null);
        elevator.setExits(null, secondfloor, basement, canteen, firstfloor, basement, null, null, null);
        firstfloor.setExits(null, null, null, null, secondfloor, null, null, null, null);
        secondfloor.setExits(null, l202, null, null, roof, firstfloor, null, null, null);
        roof.setExits(null, flag, null, valkuil1, null, null, null, null, null);
        l202.setExits(null, l203, null, secondfloor, null, null, null, null, null);
        l203.setExits(null, null, null, l202, null, null, null, null, null);
        flag.setExits(null, null, null, null, null, null, freedom, null, null);
        pc1.setExits(null, null, null, null, null, null, null, null, null);
        pc2.setExits(null, null, null, null, null, null, null, null, null);
        basement.setExits(null, null, null, null, elevator, null, null, null, null);
        this.currentRoom = enterance;
        this.respawnRoom = smos;
        this.freedomRoom = freedom;
    };
    Game.prototype.printWelcome = function () {
        this.out.println();
        this.out.println("You are in the HZ Dungeon of Applied Sciences");
        this.out.println("Plant the flag and get out as soon as possible!");
        this.out.println("First type instructions for an explanation.");
        this.out.println();
        this.out.println("You are " + this.currentRoom.description);
        this.out.print("Exits: ");
        if (this.currentRoom.northExit != null) {
            this.out.print("north ");
        }
        if (this.currentRoom.eastExit != null) {
            this.out.print("east ");
        }
        if (this.currentRoom.southExit != null) {
            this.out.print("south ");
        }
        if (this.currentRoom.westExit != null) {
            this.out.print("west ");
        }
        if (this.currentRoom.upExit != null) {
            this.out.print("up ");
        }
        if (this.currentRoom.downExit != null) {
            this.out.print("down ");
        }
        if (this.currentRoom.loginExit != null) {
            this.out.print("login ");
        }
        if (this.currentRoom.inloggenExit != null) {
            this.out.print("inloggen ");
        }
        this.out.println();
        this.out.print(">");
    };
    Game.prototype.gameOver = function () {
        this.isOn = false;
        this.out.println("Thank you for playing.  Good bye.");
        this.out.println("Hit F5 to restart the game");
    };
    Game.prototype.goRoom = function (params) {
        if (params.length == 0) {
            this.out.println("Go where?");
            return;
        }
        var direction = params[0];
        var nextRoom = null;
        switch (direction) {
            case "north":
                nextRoom = this.currentRoom.northExit;
                break;
            case "east":
                nextRoom = this.currentRoom.eastExit;
                break;
            case "south":
                nextRoom = this.currentRoom.southExit;
                break;
            case "west":
                nextRoom = this.currentRoom.westExit;
                break;
            case "up":
                nextRoom = this.currentRoom.upExit;
                break;
            case "down":
                nextRoom = this.currentRoom.downExit;
                break;
            case "login":
                nextRoom = this.currentRoom.loginExit;
                break;
            case "inloggen":
                nextRoom = this.currentRoom.inloggenExit;
                break;
        }
        if (nextRoom == null) {
            this.out.println("There is no door!");
        }
        else {
            this.currentRoom = nextRoom;
            this.out.println("You are " + this.currentRoom.description);
            this.out.print("Exits: ");
            if (this.currentRoom.northExit != null) {
                this.out.print("north ");
            }
            if (this.currentRoom.eastExit != null) {
                this.out.print("east ");
            }
            if (this.currentRoom.southExit != null) {
                this.out.print("south ");
            }
            if (this.currentRoom.westExit != null) {
                this.out.print("west ");
            }
            if (this.currentRoom.upExit != null) {
                this.out.print("up ");
            }
            if (this.currentRoom.downExit != null) {
                this.out.print("down ");
            }
            if (this.currentRoom.loginExit != null) {
                this.out.print("login ");
            }
            if (this.currentRoom.inloggenExit != null) {
                this.out.print("inloggen ");
            }
            this.out.println();
        }
        return false;
    };
    return Game;
}());
var Parser = (function () {
    function Parser(game, input) {
        var _this = this;
        this.commands = {};
        this.game = game;
        this.input = input;
        this["default"] = new Default(game);
        this.commands["help"] = new Help(game);
        this.commands["quit"] = new Quit(game);
        this.commands["go"] = new Go(game);
        this.commands["look"] = new Look(game);
        this.commands["saveyourself"] = new Saveyourself(game);
        this.commands["instructions"] = new Instructions(game);
        this.commands["login"] = new Login(game);
        this.commands["inloggen"] = new Inloggen(game);
        this.commands["teleport"] = new Teleport(game);
        input.onkeyup = function (e) {
            if (e.keyCode == 13 && _this.game.isOn) {
                var command = _this.input.value;
                _this.game.out.println(command);
                _this.parse(command.split(" "));
                _this.input.value = "";
                _this.game.out.print(">");
            }
        };
    }
    Parser.prototype.parse = function (words) {
        var wantToQuit = false;
        var SaveYourself = false;
        var params = words.slice(1);
        if (words[0] == "") {
            return;
        }
        var command;
        command = this.commands[words[0]];
        if (command == null) {
            command = this["default"];
        }
        wantToQuit = command.execute(params);
        if (wantToQuit) {
            this.input.disabled = true;
            this.game.gameOver();
        }
    };
    return Parser;
}());
var Printer = (function () {
    function Printer(output) {
        this.output = output;
    }
    Printer.prototype.print = function (text) {
        this.output.innerHTML += text;
    };
    Printer.prototype.println = function (text) {
        if (text === void 0) { text = ""; }
        this.print(text + "<br/>");
        this.output.scrollTop = this.output.scrollHeight;
    };
    return Printer;
}());
var Room = (function () {
    function Room(description) {
        this.description = description;
    }
    Room.prototype.setExits = function (north, east, south, west, up, down, teleport, login, inloggen) {
        if (north != null) {
            this.northExit = north;
        }
        if (east != null) {
            this.eastExit = east;
        }
        if (south != null) {
            this.southExit = south;
        }
        if (west != null) {
            this.westExit = west;
        }
        if (up != null) {
            this.upExit = up;
        }
        if (down != null) {
            this.downExit = down;
        }
        if (teleport != null) {
            this.loginExit = login;
        }
        if (teleport != null) {
            this.inloggenExit = inloggen;
        }
    };
    return Room;
}());
var Freedom = (function (_super) {
    __extends(Freedom, _super);
    function Freedom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Freedom.prototype.execute = function (params) {
        this.game.currentRoom = this.game.freedomRoom;
        this.game.out.println("you are teleported to " + this.game.currentRoom.description);
        return false;
    };
    return Freedom;
}(Command));
var Go = (function (_super) {
    __extends(Go, _super);
    function Go() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Go.prototype.execute = function (params) {
        if (params.length == 0) {
            this.game.out.println("Go where?");
            return;
        }
        var direction = params[0];
        var nextRoom = null;
        switch (direction) {
            case "north":
                nextRoom = this.game.currentRoom.northExit;
                break;
            case "east":
                nextRoom = this.game.currentRoom.eastExit;
                break;
            case "south":
                nextRoom = this.game.currentRoom.southExit;
                break;
            case "west":
                nextRoom = this.game.currentRoom.westExit;
                break;
            case "up":
                nextRoom = this.game.currentRoom.upExit;
                break;
            case "down":
                nextRoom = this.game.currentRoom.downExit;
                break;
        }
        if (nextRoom == null) {
            this.game.out.println("There is no door!");
        }
        else {
            this.game.currentRoom = nextRoom;
            this.game.out.println("You are " + this.game.currentRoom.description);
            this.game.out.print("Exits: ");
            if (this.game.currentRoom.northExit != null) {
                this.game.out.print("north ");
            }
            if (this.game.currentRoom.eastExit != null) {
                this.game.out.print("east ");
            }
            if (this.game.currentRoom.southExit != null) {
                this.game.out.print("south ");
            }
            if (this.game.currentRoom.westExit != null) {
                this.game.out.print("west ");
            }
            if (this.game.currentRoom.upExit != null) {
                this.game.out.print("up");
            }
            if (this.game.currentRoom.downExit != null) {
                this.game.out.print("down");
            }
            this.game.out.println();
        }
        return false;
    };
    return Go;
}(Command));
var Help = (function (_super) {
    __extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Help what?");
            return false;
        }
        this.game.out.println("You are lost. You are alone. You wander");
        this.game.out.println("around at the university.");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("   go quit help look saveyourself");
        return false;
    };
    return Help;
}(Command));
var Inloggen = (function (_super) {
    __extends(Inloggen, _super);
    function Inloggen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inloggen.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Login what?");
            return false;
        }
        this.game.out.println("Are your files are encrypted");
        this.game.out.println("Please send 1BTC(2854 dollar) to my wallet: 1BoatSLRHtKNngkdXEeobR76b53LETtpyT");
        this.game.out.println("Are your files are encrypted");
        this.game.out.println("Belangrijke bestanden geproduceerd op uw computer, foto’s, video’s,");
        this.game.out.println(" documenten en dergelijke, zijn geëncrypt. Hier is een volledige lijst van geëncrypteerde bestanden, en u kan dit persoonlijk verifiëren:.");
        this.game.out.println(".pdf .txt .doc .docx .jpg .jpeg .png .wmv .mpeg .mpeg2 .mp4 .mp3 .zip .csv .avi .xls .odt .rtf");
        this.game.out.println("Pay the amount of money to receive the decription key. Whitin 48-hours the price will double. After 72 hours, all data will be destroyed!");
        return false;
    };
    return Inloggen;
}(Command));
var Instructions = (function (_super) {
    __extends(Instructions, _super);
    function Instructions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instructions.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Help what?");
            return false;
        }
        this.game.out.println("Your command words are:");
        this.game.out.println("Go | North, South, East, West, Up, Down,Teleport, or login.");
        this.game.out.println("Go to the roof with the elevator, plant the flag and teleport to freedom.");
        return false;
    };
    return Instructions;
}(Command));
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Login to what?");
            return false;
        }
        this.game.out.println("Je bent ingelogd op computer 2.");
        this.game.out.println();
        return false;
    };
    return Login;
}(Command));
var Look = (function (_super) {
    __extends(Look, _super);
    function Look() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Look.prototype.execute = function (params) {
        this.game.out.println("You are " + this.game.currentRoom.description);
        return false;
    };
    return Look;
}(Command));
var Quit = (function (_super) {
    __extends(Quit, _super);
    function Quit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quit.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Quit what?");
            return false;
        }
        else {
            return true;
        }
    };
    return Quit;
}(Command));
var Saveyourself = (function (_super) {
    __extends(Saveyourself, _super);
    function Saveyourself() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Saveyourself.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Save what?");
            return false;
        }
        else {
            this.game.isOn = false;
            this.game.out.println("You Saved Yourself From a lifetime in this room. But you failed to plant the flag.");
            this.game.out.println("Press F5 to restart");
        }
    };
    return Saveyourself;
}(Command));
var Teleport = (function (_super) {
    __extends(Teleport, _super);
    function Teleport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teleport.prototype.execute = function (params) {
        this.game.currentRoom = this.game.respawnRoom;
        this.game.out.println("you are teleported  " + this.game.currentRoom.description);
        return false;
    };
    return Teleport;
}(Command));
