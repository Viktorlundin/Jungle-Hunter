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
var JungleHunter;
(function (JungleHunter) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            var _this = _super.call(this, game, x, y, 'dude', 0) || this;
            _this.x = null;
            _this.y = null;
            _this.lastXPosition = null;
            _this.lastYPosition = null;
            _this.cursors = _this.game.input.keyboard.createCursorKeys();
            _this.x = x;
            _this.y = y;
            _this.animations.add('left', [0, 1, 2, 3], 10, true);
            _this.animations.add('right', [5, 6, 7, 8], 10, true);
            _this.game.physics.arcade.enable(_this);
            _this.body.collideWorldBounds = true;
            _this.body.drag.y = 1000;
            _this.game.physics.arcade.enable(_this);
            _this.game.add.existing(_this);
            return _this;
        }
        ;
        return Player;
    }(Phaser.Sprite));
    JungleHunter.Player = Player;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    //import * as game from "./Game.ts";
    console.log("yoyoyo");
    window.onload = function () { var game = new JungleHunter.Main(); };
    //function preload()
    //{
    //    game.load.image('jungle', 'Jungle.png');
    //    game.load.image('ground', 'platform.png');
    //    game.load.image('baddie', 'baddie.png');
    //    game.load.image('bullet', 'bullet.png');
    //    game.load.spritesheet('dude', 'dude.png', 32, 48);
    //}
    //var platforms;
    //var player;
    //var cursors;
    //var mobs;
    //var score = 0;
    //var scoreText;
    //var weapon;
    //var firebutton;
    //import Player = require("./Player");
    //function create() {
    //    game.physics.startSystem(Phaser.Physics.ARCADE);
    //    game.add.sprite(0, 0, 'jungle');
    //    platforms = game.add.group();
    //    platforms.enableBody = true;
    //    weapon = game.add.weapon(100, 'bullet');
    //    weapon.fireRate = 20;
    //    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    //    weapon.fireAngle = 180;
    //    weapon.bulletAngleOffset = 0;
    //    weapon.bulletSpeed = 400;
    //    player = game.add.sprite(1000, game.world.height + 100, 'dude');
    //    game.physics.arcade.enable(player);
    //    weapon.trackSprite(player, 0, 14);
    //    firebutton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    //    player.body.collideWorldBounds = true;
    //    player.body.drag.y = 1000;
    //    player.animations.add('left', [0, 1, 2, 3], 10, true);
    //    player.animations.add('right', [5, 6, 7, 8], 10, true);
    //    cursors = game.input.keyboard.createCursorKeys();
    //    mobs = game.add.group();
    //    mobs.enableBody = true;
    //    mobs.physicsBodyType = Phaser.Physics.ARCADE;
    //    for (var i = 0; i < 5; i++)
    //    {
    //        var mob = mobs.create(i * 5, Math.floor((Math.random() * 300) + 600), 'baddie');
    //        mob.body.velocity.x = Math.floor((Math.random() * 10) +1);  
    //        //mob.animations.add('baddie', [2, 3], 1, true);
    //        //mob.play('baddie');
    //    }
    //    //var frameNames = Phaser.Animation.generateFrameNames('baddie', 0, 3);
    //    //mobs.callAll('animations.add', 'animations', 'walk', frameNames, 30, true, false);
    //    //mobs.callAll('play', null, 'walk');
    //    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    //}
    //function update()
    //{
    //    //  Collide the player and the stars with the platforms
    //    var hitPlatform = game.physics.arcade.collide(player, platforms);
    //    game.physics.arcade.collide(mobs, platforms);
    //    game.physics.arcade.collide(weapon, mobs, function (bullet, mobs) { bullet.kill(); mobs.kill(); });
    //    game.physics.arcade.overlap(mobs, weapon, collectStar, null, this);
    //    if (firebutton.isDown) {
    //        weapon.fire();
    //    }
    //    function collectStar(weapon, mobs)
    //    {
    //        // Removes the star from the screen
    //        mobs.kill();
    //        //  Add and update the score
    //        score += 10;
    //        scoreText.text = 'Score: ' + score;
    //    }
    //    //  Reset the players velocity (movement)
    //    player.body.velocity.x = 0;
    //    if (cursors.left.isDown) {
    //        //  Move to the left
    //        player.body.velocity.x = -150;
    //        player.animations.play('left');
    //    }
    //    else if (cursors.right.isDown) {
    //        //  Move to the right
    //        player.body.velocity.x = 150;
    //        player.animations.play('left');
    //    }
    //    else if (cursors.down.isDown)
    //    {
    //        player.body.velocity.y = 150;
    //        player.animations.play('left');
    //    }
    //    else if (cursors.up.isDown) {
    //        player.body.velocity.y = -150;
    //        player.animations.play('left');
    //    }
    //    else {
    //        //  Stand still
    //        player.animations.stop();
    //        player.frame = 0;
    //    }
    //  Allow the player to jump if they are touching the ground.
    //Trolololololololo
    //}
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
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
    var Host = (function (_super) {
        __extends(Host, _super);
        function Host() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Host.prototype.create = function () {
            console.log("Är i  host menu nu.");
            this.background = this.add.sprite(0, 0, 'Host');
            //this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            this.startbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'Startgame', this.startGame, this);
            this.backbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 50, 'BackButton', this.GoBack, this);
            JungleHunter.Global.socket.emit('CanIRegister', { email: "joe@goes.se", password: "sanfer123", username: "JungleJontas" });
            JungleHunter.Global.socket.emit('CanILogin', { email: "joe@goes.se", password: "sanfer123" });
        };
        Host.prototype.startGame = function () {
            this.game.state.start('RunGame', true, false);
        };
        Host.prototype.GoBack = function () {
            this.game.state.start('MainMenu', true, false);
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
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Lobby.prototype.create = function () {
            console.log("Är i  lobby menu nu.");
            this.background = this.add.sprite(0, 0, 'Lobby');
            //this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            this.startbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'Startgame', this.startGame, this);
            this.backbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 50, 'BackButton', this.GoBack, this);
            this.LobbyList = ["CDog", "Viktor", "Eriko", "Jonathang"];
            this.CheckLobbyList();
            JungleHunter.Global.socket.emit('CanIRegister', { email: "joe@goes.se", password: "sanfer123", username: "JungleJontas" });
            JungleHunter.Global.socket.emit('CanILogin', { email: "joe@goes.se", password: "sanfer123" });
        };
        Lobby.prototype.startGame = function () {
            this.game.state.start('RunGame', true, false);
        };
        Lobby.prototype.GoBack = function () {
            this.game.state.start('MainMenu', true, false);
        };
        Lobby.prototype.CheckLobbyList = function () {
            for (var i = 0; i < this.LobbyList.length; i++) {
                this.joinbutton = this.game.add.button(this.game.world.centerX - 70, this.game.world.centerY, 'EmptyButton', this.startGame, this);
                var text = this.game.add.text(0, 0, this.LobbyList[i], { font: "16px Arial", fill: "#ffffff" });
                this.joinbutton.addChild(text);
            }
        };
        return Lobby;
    }(Phaser.State));
    JungleHunter.Lobby = Lobby;
})(JungleHunter || (JungleHunter = {}));
var JungleHunter;
(function (JungleHunter) {
    var Login = (function (_super) {
        __extends(Login, _super);
        function Login() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Login.prototype.create = function () {
            console.log("Är i login menu nu.");
            this.background = this.add.sprite(0, 0, 'loginpage');
            this.loginbutton = this.game.add.button(this.game.world.centerX - 250, this.game.world.centerY, 'login', this.login, this);
            this.registerbutton = this.game.add.button(this.game.world.centerX + 100, this.game.world.centerY, 'register', this.registernewPlayer, this);
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
        };
        Login.prototype.registernewPlayer = function () {
            JungleHunter.Global.socket.emit('CanIRegister', { email: "joe@goes.se", password: "sanfer123", username: "JungleJontas" });
        };
        Login.prototype.login = function () {
            console.log(this.inputPassword);
            JungleHunter.Global.socket.emit('CanILogin', { email: "joe@goes.se", password: "sanfer123" });
            this.startGame();
        };
        Login.prototype.startGame = function () {
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
        }
        return Global;
    }());
    JungleHunter.Global = Global;
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            var _this = _super.call(this, 1010, 790, Phaser.AUTO, 'content', null) || this;
            _this.state.add('Boot', JungleHunter.Boot, false);
            _this.state.add('Preloader', JungleHunter.Preloader, false);
            _this.state.add('Login', JungleHunter.Login, false);
            _this.state.add('MainMenu', JungleHunter.MainMenu, false);
            _this.state.add('RunGame', JungleHunter.RunGame, false);
            _this.state.add('Lobby', JungleHunter.Lobby, false);
            _this.state.add('Host', JungleHunter.Host, false);
            console.log("try start boot");
            _this.state.start('Boot');
            return _this;
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
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainMenu.prototype.create = function () {
            console.log("Är i main menu nu.");
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;
            this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            this.Hostbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY - 50, 'HostGameButton', this.HostGame, this);
            this.Joinbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'JoinGameButton', this.JoinGame, this);
            this.LogOutbutton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 50, 'LogOutButton', this.LogOut, this);
            JungleHunter.Global.socket.emit('CanIRegister', { email: "joe@goes.se", password: "sanfer123", username: "JungleJontas" });
            JungleHunter.Global.socket.emit('CanILogin', { email: "joe@goes.se", password: "sanfer123" });
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
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.preload = function () {
            this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
            this.loaderText.anchor.setTo(0.5);
            this.load.image('jungle', 'Jungle.png');
            this.load.image('ground', 'platform.png');
            this.load.image('titlepage', 'JungleHunterTitlescreen.png');
            this.load.image('loginpage', 'loginbackground.png');
            this.load.image('login', 'Login.png');
            this.load.image('register', 'Register.png');
            this.load.image('baddie', 'baddie.png');
            this.load.image('bullet', 'bullet.png');
            this.load.image('Startgame', 'Startgame.png');
            this.load.spritesheet('dude', 'dude.png', 32, 48);
            this.load.spritesheet('baddie', 'baddie.png', 15, 32);
            this.load.image('Lobby', 'Lobby.jpg');
            this.load.image('Host', 'Host.jpg');
            this.load.image('HostGameButton', 'hostgame.png');
            this.load.image('JoinGameButton', 'joingame.png');
            this.load.image('LogOutButton', 'logout.png');
            this.load.image('BackButton', 'goback.png');
            this.load.image('EmptyButton', 'EmptyButton.png');
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
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.playerID = null;
            _this.playerList = new Array();
            return _this;
        }
        RunGame.prototype.create = function () {
            console.log("spelet är igång");
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0, 0, 'jungle');
            //this.platforms = this.add.group();
            //this.platforms.enableBody = true;
            for (var i = 1; i < 5; i++) {
                this.playerList[i] = new JungleHunter.Player(this.game, 900, (100 + (i * 130)));
            }
            this.setEventHandlers();
        };
        RunGame.prototype.update = function () {
            if (this.playerID != null) {
                this.Movement(this.playerList[this.playerID]);
            }
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
        RunGame.prototype.EventSetMyPlayerID = function (data) {
            this.playerID = data;
        };
        RunGame.prototype.EventNewPlayer = function (data) {
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
                JungleHunter.Global.socket.emit('playerMoved', { x: x, y: y, player: this.playerID });
                console.log("coords sent");
            }
            player.lastXPosition = player.x;
            player.lastYPosition = player.y;
        };
        RunGame.prototype.setEventHandlers = function () {
            var _this = this;
            console.log("event handler set");
            JungleHunter.Global.socket.on('TotalConnections', function (data) { return _this.EventSetMyPlayerID(data); });
            JungleHunter.Global.socket.on('newPlayer', function (data) { return _this.EventNewPlayer(data); });
            JungleHunter.Global.socket.on('updateCoordinates', function (data) { return _this.EventUpdateCoordinates(data); });
            //Call
            JungleHunter.Global.socket.emit('HowManyTotalConnections', null);
        };
        return RunGame;
    }(Phaser.State));
    JungleHunter.RunGame = RunGame;
})(JungleHunter || (JungleHunter = {}));
//# sourceMappingURL=game.js.map