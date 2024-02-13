//Adam Chaabane
//Astro World
//Took about 25 hours
//Creative tilt: I created a system for spawning infinite obstacles which i thought was cool


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Tutorial, Credits]
};

let game = new Phaser.Game(config);

game.settings = {
    gameTimer: 60000
};

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyDOWN, keySPACE;
