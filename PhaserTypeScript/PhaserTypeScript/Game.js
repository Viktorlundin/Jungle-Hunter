var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JungleHunter;
(function (JungleHunter) {
    var Gun = (function (_super) {
        __extends(Gun, _super);
        function Gun(game, x, y) {
            _super.call(this, game, x, y, 'baddie', 0);
            this.weapon = this.game.add.weapon(30, 'bullet');
            this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
            this.weapon.bulletSpeed = 600;
            this.weapon.fireRate = 100;
            //Vapnets sprite
            this.sprite = this.sprite(400, 300, 'pistol');
            this.sprite.anchor.set(0.5);
            game.physics.arcade.enable(this.sprite);
            this.weapon.trackSprite(this.sprite, -20, 0, true); //Logiska vapnet följer efter spriten
            this.weapon.trackRotation = false;
        }
        return Gun;
    }(Phaser.Sprite));
    JungleHunter.Gun = Gun;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var mob1 = (function (_super) {
        __extends(mob1, _super);
        function mob1(game, x, y) {
            _super.call(this, game, x, y, 'baddie', 0);
            this.x = null;
            this.y = null;
            this.x = x;
            this.y = y;
            this.animations.add('right', [2, 3], 10, true);
            this.game.physics.arcade.enable(this);
            this.body.collideWorldBounds = true;
            this.body.drag.y = 1000;
            this.game.physics.arcade.enable(this);
            this.game.add.existing(this);
            this.body.velocity.x = 150;
            this.animations.play('right');
        }
        return mob1;
    }(Phaser.Sprite));
    JungleHunter.mob1 = mob1;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, 'dude', 0);
            this.x = null;
            this.y = null;
            this.lastXPosition = null;
            this.lastYPosition = null;
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.x = x;
            this.y = y;
            this.animations.add('left', [0, 1, 2, 3], 10, true);
            this.animations.add('right', [5, 6, 7, 8], 10, true);
            this.game.physics.arcade.enable(this);
            this.body.collideWorldBounds = true;
            this.body.drag.y = 1000;
            this.game.physics.arcade.enable(this);
            this.game.add.existing(this);
        }
        return Player;
    }(Phaser.Sprite));
    JungleHunter.Player = Player;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    //import * as game from "./Game.ts";
    console.log("yoyoyo");
    window.onload = function () { var game = new JungleHunter.Main(); };
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.create = function () {
            console.log("works");
            this.stage.setBackgroundColor(0xFFFFFF);
            //this.setEventHandlers();
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    }(Phaser.State));
    JungleHunter.Boot = Boot;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            _super.apply(this, arguments);
            this.playerID = null;
            this.playerList = new Array();
            this.mobsList = new Array();
        }
        GameOver.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'defeat');
            this.backbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 300, 'BackButton', this.ReturnToMainMenu, this);
            this.gameovertextstyle = { font: "72px Elephant", fill: "Black" };
            this.gameovertext = this.game.add.text(this.game.world.centerX - 500, this.game.world.centerY - 300, "GAME OVER", this.gameovertextstyle);
        };
        GameOver.prototype.PlayAgain = function () {
            this.game.state.start('RunGame', true, false);
        };
        GameOver.prototype.ReturnToMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return GameOver;
    }(Phaser.State));
    JungleHunter.GameOver = GameOver;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var Host = (function (_super) {
        __extends(Host, _super);
        function Host() {
            _super.apply(this, arguments);
        }
        Host.prototype.create = function () {
            console.log("Är i  host menu nu.");
            this.background = this.add.sprite(0, 0, 'Host');
            //this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            this.backbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 300, 'BackButton', this.GoBack, this);
            this.OnePbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 200, '1pButton', this.OnePfunc, this);
            this.TwoPButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 100, '2pButton', this.TwoPfunc, this);
            this.ThreePButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, '3pButton', this.ThreePfunc, this);
            this.FourPButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, '4pButton', this.FourPfunc, this);
            this.style = { font: "32px Elephant", fill: "pink" };
            this.Text = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 300, "Select number of players", this.style);
        };
        Host.prototype.GoBack = function () {
            this.game.state.start('MainMenu', true, false);
        };
        Host.prototype.OnePfunc = function () {
            JungleHunter.Global.numberOfPlayers = 1;
            this.CreateRoom(JungleHunter.Global.prototype.PlayerData.username);
            this.game.state.start('RunGame', true, false);
        };
        Host.prototype.TwoPfunc = function () {
            JungleHunter.Global.numberOfPlayers = 2;
            this.CreateRoom(JungleHunter.Global.prototype.PlayerData.username);
            this.game.state.start('RunGame', true, false);
        };
        Host.prototype.ThreePfunc = function () {
            JungleHunter.Global.numberOfPlayers = 3;
            this.CreateRoom(JungleHunter.Global.prototype.PlayerData.username);
            this.game.state.start('RunGame', true, false);
        };
        Host.prototype.FourPfunc = function () {
            JungleHunter.Global.numberOfPlayers = 4;
            this.CreateRoom(JungleHunter.Global.prototype.PlayerData.username);
            this.game.state.start('RunGame', true, false);
        };
        Host.prototype.CreateRoom = function (playerName) {
            JungleHunter.Global.prototype.PlayerData.activeGameRoom = playerName;
            JungleHunter.Global.socket.emit('createRoom', { room: JungleHunter.Global.prototype.PlayerData.activeGameRoom, numberOfPlayers: JungleHunter.Global.numberOfPlayers });
        };
        Host.prototype.LeaveRoom = function (playerName) {
            JungleHunter.Global.socket.leave(playerName);
        };
        return Host;
    }(Phaser.State));
    JungleHunter.Host = Host;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var Lobby = (function (_super) {
        __extends(Lobby, _super);
        function Lobby() {
            _super.apply(this, arguments);
        }
        Lobby.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'Lobby');
            this.backbutton = this.game.add.button(this.game.world.centerX - 250, this.game.world.centerY, 'BackButton', this.GoBack, this);
            this.style = { font: "32px Elephant", fill: "black" };
            this.text = this.game.add.text(this.game.world.centerX - 50, this.game.world.centerY - 400, "Available games", this.style);
            this.ButtonList = new Array();
            this.SetEventHandlers();
        };
        Lobby.prototype.SetEventHandlers = function () {
            var _this = this;
            JungleHunter.Global.socket.on('GameRoomList', function (data) { return _this.EvenGetLobbyList(data); });
            JungleHunter.Global.socket.emit('EmitGameRoomList', null);
            console.log("event emitted lobby");
        };
        Lobby.prototype.EvenGetLobbyList = function (msg) {
            this.LobbyList = msg;
            console.log("LobbyList set");
            this.CheckLobbyList();
        };
        Lobby.prototype.startGame = function (data) {
            var playerName = String(data.getChildAt(0).text);
            var splittedPlayerName = playerName.split(" ");
            this.JoinRoom(splittedPlayerName[0]);
            JungleHunter.Global.numberOfPlayers = Number(splittedPlayerName[1]);
            this.game.state.start('RunGame', true, false);
        };
        Lobby.prototype.GoBack = function () {
            this.game.state.start('MainMenu', true, false);
        };
        Lobby.prototype.JoinRoom = function (playerName) {
            JungleHunter.Global.prototype.PlayerData.activeGameRoom = playerName;
            console.log("playerName ===" + playerName);
            JungleHunter.Global.socket.emit('joinRoom', { room: JungleHunter.Global.prototype.PlayerData.activeGameRoom });
        };
        Lobby.prototype.LeaveRoom = function (playerName) {
            JungleHunter.Global.socket.leave(playerName);
        };
        Lobby.prototype.CheckLobbyList = function () {
            for (var i = 0; i <= this.LobbyList.length - 1; i++) {
                var joinbutton = this.game.add.button(this.game.world.centerX, 35 + (i * 75), 'EmptyButton', this.startGame, this);
                var text = this.game.add.text(0, 0, this.LobbyList[i] + " slots", { font: "14px Elephant", fill: "black", wordWrap: true, wordWrapWidth: joinbutton.width, align: "center" });
                text.anchor.set(-0.20);
                joinbutton.addChild(text);
                this.ButtonList.push(joinbutton);
            }
        };
        return Lobby;
    }(Phaser.State));
    JungleHunter.Lobby = Lobby;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var AccountData = (function () {
        function AccountData() {
            this.activeGameRoom = null;
        }
        return AccountData;
    }());
    JungleHunter.AccountData = AccountData;
    var Login = (function (_super) {
        __extends(Login, _super);
        function Login() {
            _super.apply(this, arguments);
        }
        Login.prototype.create = function () {
            console.log("Är i login menu nu.");
            this.setLoginEventHandlers(); //Sätter lyssna funktion(er)
            this.setLoginEventandlers();
            this.setRegisterEventHandlers();
            this.background = this.add.sprite(0, 0, 'loginpage');
            this.loginbutton = this.game.add.button(this.game.world.centerX - 250, this.game.world.centerY, 'login', this.login, this);
            this.registerbutton = this.game.add.button(this.game.world.centerX + 100, this.game.world.centerY, 'register', this.registernewPlayer, this);
            this.styles = { font: "32px Elephant", fill: "white" };
            this.rememberText = this.game.add.text(this.game.world.centerX - 200, this.game.world.centerY + 100, "Remember me", this.styles);
            this.checkbox = this.game.add.button(this.game.world.centerX + 50, this.game.world.centerY + 120, 'checkbox', this.actiononclick, this, null, null, null, null);
            this.checkbox.anchor.setTo(0.5, 0.5);
            var plugin = new PhaserInput.Plugin(this.game, this.game.plugins);
            this.add.plugin(plugin);
            this.inputEmail = this.game.add.inputField(330, 195, {
                font: '18px Arial',
                fill: '#212121',
                fontWeight: 'bold',
                width: 150,
                padding: 8,
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 6,
                placeHolder: 'Email',
                type: PhaserInput.InputType.text
            });
            this.inputName = this.game.add.inputField(330, 90, {
                font: '18px Arial',
                fill: '#212121',
                fontWeight: 'bold',
                width: 150,
                padding: 8,
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 6,
                placeHolder: 'Nickname',
                type: PhaserInput.InputType.text
            });
            this.inputPassword = this.game.add.inputField(330, 300, {
                font: '18px Arial',
                fill: '#212121',
                fontWeight: 'bold',
                width: 150,
                padding: 8,
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 6,
                placeHolder: 'Password',
                type: PhaserInput.InputType.password
            });
            this.checkCookie();
        };
        Login.prototype.setCookie = function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        };
        Login.prototype.getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        };
        Login.prototype.checkCookie = function () {
            var useremail = this.getCookie("userEmail");
            var username = this.getCookie("userName");
            if (useremail != null) {
                this.inputEmail.setText(useremail);
                this.inputName.setText(username);
                this.checkbox.frame = 1;
            }
            else {
                if (useremail != "" && useremail != null) {
                    this.setCookie("userEmail", useremail, 365);
                    this.setCookie("userName", username, 365);
                }
            }
        };
        Login.prototype.EventLoginAccepted = function (accountData) {
            if (this.checkbox.frame == 1) {
                this.setCookie("userEmail", this.inputEmail.value, 365);
                this.setCookie("userName", this.inputName.value, 365);
            }
            if (accountData) {
                //Sätt in all accountdata i en klass obj och skicka med den i startGame(klass obj)
                var PlayerData = new AccountData();
                PlayerData.email = accountData.email;
                PlayerData.username = accountData.username;
                PlayerData.password = accountData.password;
                JungleHunter.Global.prototype.PlayerData = PlayerData;
                this.startGame();
            }
        };
        Login.prototype.loginfailed = function () {
            this.style = { font: "64px Elephant", fill: "red" };
            this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 200, "Failed to login", this.style);
            var tween = this.add.tween(this.text).to({ alpha: 0 }, 1500, Phaser.Easing.Linear.None, true);
        };
        Login.prototype.Registerfailed = function () {
            this.Style = { font: "18px Elephant", fill: "red" };
            this.text = this.game.add.text(this.game.world.centerX - 250, this.game.world.centerY - 150, "A user with that email is already registered", this.Style);
            var tween = this.add.tween(this.text).to({ alpha: 0 }, 5000, Phaser.Easing.Linear.None, true);
        };
        Login.prototype.actiononclick = function () {
            if (this.checkbox.frame == 0) {
                this.checkbox.frame = 1;
            }
            else {
                this.checkbox.frame = 0;
            }
        };
        Login.prototype.setLoginEventandlers = function () {
            var _this = this;
            JungleHunter.Global.socket.on('loginfailed', function () { return _this.loginfailed(); });
        };
        Login.prototype.setRegisterEventHandlers = function () {
            var _this = this;
            JungleHunter.Global.socket.on('RegisterFailed', function () { return _this.Registerfailed(); });
        };
        Login.prototype.setLoginEventHandlers = function () {
            var _this = this;
            JungleHunter.Global.socket.on('LoginAccepted', function (data) { return _this.EventLoginAccepted(data); });
        };
        Login.prototype.registernewPlayer = function () {
            JungleHunter.Global.socket.emit('CanIRegister', { email: this.inputEmail.value, password: this.inputPassword.value, username: this.inputName.value });
        };
        Login.prototype.login = function () {
            JungleHunter.Global.socket.emit('CanILogin', { email: this.inputEmail.value, password: this.inputPassword.value });
            console.log("Emittat");
        };
        Login.prototype.startGame = function () {
            this.state.states['MainMenu'].playername = this.inputName.value;
            this.game.state.start('MainMenu', true, false);
        };
        return Login;
    }(Phaser.State));
    JungleHunter.Login = Login;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var Global = (function () {
        function Global() {
            this.socket = null;
            this.PlayerData = null;
        }
        return Global;
    }());
    JungleHunter.Global = Global;
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.call(this, 1010, 790, Phaser.AUTO, 'content', null);
            this.state.add('Boot', JungleHunter.Boot, false);
            this.state.add('Preloader', JungleHunter.Preloader, false);
            this.state.add('Login', JungleHunter.Login, false);
            this.state.add('MainMenu', JungleHunter.MainMenu, false);
            this.state.add('RunGame', JungleHunter.RunGame, false);
            this.state.add('Lobby', JungleHunter.Lobby, false);
            this.state.add('Host', JungleHunter.Host, false);
            this.state.add('GameOver', JungleHunter.GameOver, false);
            console.log("try start boot");
            this.state.start('Boot');
        }
        return Main;
    }(Phaser.Game));
    JungleHunter.Main = Main;
})(JungleHunter || (JungleHunter = {}));
window.onload = function () {
    new JungleHunter.Main();
    //new TypeScriptPhaserApp1.Client.GameEngine();
};
var JungleHunter;
(function (JungleHunter) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.create = function () {
            console.log("Är i main menu nu.");
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            this.welcomeTextstyle = { font: "36px Elephant", fill: "Green" };
            this.welcomeText = this.add.text(this.game.world.centerX - 300, this.game.world.centerY - 200, "Welcome" + " " + this.playername, this.welcomeTextstyle);
            this.Hostbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 50, 'HostGameButton', this.HostGame, this);
            this.Joinbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'JoinGameButton', this.JoinGame, this);
            this.LogOutbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 50, 'LogOutButton', this.LogOut, this);
        };
        MainMenu.prototype.HostGame = function () {
            this.game.state.start('Host', true, false);
        };
        MainMenu.prototype.JoinGame = function () {
            this.game.state.start('Lobby', true, false);
        };
        MainMenu.prototype.LogOut = function () {
            this.game.state.start('Login', true, false);
        };
        return MainMenu;
    }(Phaser.State));
    JungleHunter.MainMenu = MainMenu;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.game.stage.disableVisibilityChange = true;
            this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
            this.loaderText.anchor.setTo(0.5);
            this.load.image('jungle', 'Jungle.png');
            this.load.image('ground', 'platform.png');
            this.load.image('titlepage', 'JungleHunterTitlescreen.png');
            this.load.image('loginpage', 'loginbackground.png');
            this.load.image('login', 'Login.png');
            this.load.image('defeat', 'defeat.png');
            this.load.image('register', 'Register.png');
            this.load.image('baddie', 'baddie.png');
            this.load.image('bullet', 'bullet.png');
            this.load.image('Startgame', 'Startgame.png');
            this.load.spritesheet('dude', 'dude.png', 32, 48);
            this.load.spritesheet('baddie', 'baddie.png', 32, 32);
            this.load.image('Lobby', 'Lobby.jpg');
            this.load.image('Host', 'Host.jpg');
            this.load.spritesheet('checkbox', 'checkbox.png', 21, 27);
            this.load.image('HostGameButton', 'hostgame.png');
            this.load.image('JoinGameButton', 'joingame.png');
            this.load.image('LogOutButton', 'logout.png');
            this.load.image('BackButton', 'goback.png');
            this.load.image('EmptyButton', 'EmptyButton.png');
            this.load.image('1pButton', '1p.png');
            this.load.image('2pButton', '2p.png');
            this.load.image('3pButton', '3p.png');
            this.load.image('4pButton', '4p.png');
            this.load.image('pistol', 'pistol.png');
        };
        Preloader.prototype.create = function () {
            console.log("i preloader");
            var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startLogin, this);
        };
        Preloader.prototype.startLogin = function () {
            this.game.state.start('Login', true, false);
        };
        return Preloader;
    }(Phaser.State));
    JungleHunter.Preloader = Preloader;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var RunGame = (function (_super) {
        __extends(RunGame, _super);
        function RunGame() {
            _super.apply(this, arguments);
            this.playerID = null;
            this.playerList = new Array();
            this.playerWeaponSprite = new Array();
            this.playerWeaponsLists = new Array();
            this.Bullet = function (game, key) {
                Phaser.Sprite.call(this, game, 0, 0, key);
                this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
                this.physics.arcade.enable(this.Bullet);
                this.anchor.set(0.5);
                this.checkWorldBounds = true;
                this.outOfBoundsKill = true;
                this.exists = false;
                this.tracking = false;
                this.scaleSpeed = 0;
            };
        }
        RunGame.prototype.create = function () {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0, 0, 'jungle');
            this.platforms = this.add.group();
            this.platforms.enableBody = true;
            for (var i = 1; i < 5; i++)
                this.playerWeaponsLists[i] = new Array();
            for (var i = 1; i < JungleHunter.Global.numberOfPlayers + 1; i++) {
                var sprite = this.add.sprite(400, 300, 'pistol');
                sprite.anchor.set(0.5);
                this.physics.arcade.enable(sprite);
                this.playerWeaponSprite[i] = sprite;
            }
            for (var i = 1; i < JungleHunter.Global.numberOfPlayers + 1; i++) {
                var weapon = this.add.weapon(30, 'bullet');
                weapon.trackRotation = false;
                weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
                weapon.bulletSpeed = 2000;
                weapon.fireRate = 700;
                weapon.trackRotation = false;
                weapon.fireAngle = Phaser.ANGLE_LEFT;
                this.playerWeaponsLists[i].push(weapon);
                this.playerWeaponsLists[i][0].trackSprite(this.playerWeaponSprite[i], -20, 0, true);
            }
            var cursors = this.input.keyboard.createCursorKeys();
            this.fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR); //bara en knapp
            for (var i = 1; i <= JungleHunter.Global.numberOfPlayers; i++) {
                this.playerList[i] = new JungleHunter.Player(this.game, 900, (100 + (i * 130)));
            }
            this.setEventHandlers();
        };
        RunGame.prototype.update = function () {
            if (this.playerID != null) {
                this.Movement(this.playerList[this.playerID]);
                for (var i = 1; i < JungleHunter.Global.numberOfPlayers + 1; i++) {
                    this.playerWeaponSprite[i].body.position.x = this.playerList[i].x - 500; //vapnet följer efter spelaren
                    this.playerWeaponSprite[i].body.position.y = this.playerList[i].y - 370;
                    this.playerWeaponSprite[i].bringToTop();
                }
            }
            if (this.fireButton.isDown) {
                this.playerWeaponsLists[this.playerID][0].trackRotation = false;
                this.playerWeaponsLists[this.playerID][0].fireAngle = Phaser.ANGLE_LEFT;
                this.playerWeaponsLists[this.playerID][0].fire();
            }
            this.physics.arcade.overlap(this.playerList[this.playerID], this.mobs, this.after_collision, null, this);
        };
        RunGame.prototype.Movement = function (player) {
            player.body.velocity.x = 0;
            if (player.cursors.left.isDown) {
                player.body.velocity.x = -150;
                player.animations.play('left');
            }
            else if (player.cursors.right.isDown) {
                player.body.velocity.x = 150;
                player.animations.play('left');
            }
            else if (player.cursors.down.isDown) {
                player.body.velocity.y = 150;
                player.animations.play('left');
            }
            else if (player.cursors.up.isDown) {
                player.body.velocity.y = -150;
                player.animations.play('left');
            }
            else {
                player.animations.stop();
                player.frame = 0;
            }
            this.BroadCastPlayerCoordinates(player);
        };
        RunGame.prototype.after_collision = function () {
            console.log("Killing a mob");
            this.mobs.kill();
        };
        RunGame.prototype.EventSetMyPlayerID = function (data) {
            this.playerID = data;
        };
        RunGame.prototype.EventNewPlayer = function (data) {
        };
        RunGame.prototype.EventSpawnMob = function (data) {
            //this.mob = new mob1(this.game, 1, data.y);
            this.mobs = this.add.group();
        };
        RunGame.prototype.EventUpdateCoordinates = function (data) {
            var id, x, y;
            id = data.player;
            x = data.x;
            y = data.y;
            this.playerList[id].x = x;
            this.playerList[id].y = y;
        };
        RunGame.prototype.BroadCastPlayerCoordinates = function (player) {
            if (!((player.x == player.lastXPosition) && (player.y == player.lastYPosition))) {
                var x = player.body.position.x;
                var y = player.body.position.y;
                JungleHunter.Global.socket.emit('playerMoved', { x: x, y: y, player: this.playerID, gameRoom: JungleHunter.Global.prototype.PlayerData.activeGameRoom });
            }
            player.lastXPosition = player.x;
            player.lastYPosition = player.y;
        };
        RunGame.prototype.setEventHandlers = function () {
            var _this = this;
            JungleHunter.Global.socket.on('TotalConnections', function (data) { return _this.EventSetMyPlayerID(data); });
            JungleHunter.Global.socket.on('newPlayer', function (data) { return _this.EventNewPlayer(data); });
            JungleHunter.Global.socket.on('updateCoords', function (data) { return _this.EventUpdateCoordinates(data); });
            JungleHunter.Global.socket.on('Mob', function (data) { return _this.EventSpawnMob(data); });
            //Call
            JungleHunter.Global.socket.emit('HowManyTotalConnections', null);
            JungleHunter.Global.socket.emit('StartGame', JungleHunter.Global.prototype.PlayerData.activeGameRoom);
        };
        return RunGame;
    }(Phaser.State));
    JungleHunter.RunGame = RunGame;
})(JungleHunter || (JungleHunter = {}));
//# sourceMappingURL=game.js.map