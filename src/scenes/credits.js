class Credits extends Phaser.Scene {
    constructor() {
        super("creditsscene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
		this.load.audio('sfx_play', './assets/play.mp3');
		this.load.audio('sfx_start', './assets/start.mp3');
		
		this.load.audio('sfx_redo', './assets/redo.mp3');
		
		
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
		this.load.image('spaceshipIcon', './assets/spaceship.png');
    }

    create() {
		
		
		

	
	
        // menu text configuration
        let menuConfig = {
        fontFamily: 'Verdana', // changed font
        fontSize: '18px', // slightly larger text
        backgroundColor: '#800080', // a shade of purple
        color: '#FFFFFF', // white for contrast
        align: 'center', // centered text
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
		
		
    }
        
        // show updated menu text
    //this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding - 130, 'Credits', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2 -170, 'Music:', menuConfig).setOrigin(0.5);
	
	this.add.text(game.config.width/2, game.config.height/2 -120, 'https://pixabay.com/music/upbeat-space-chillout-14194/', menuConfig).setOrigin(0.5);
	
	this.add.text(game.config.width/2, game.config.height/2 -50, 'Sound effects: ', menuConfig).setOrigin(0.5);
	
	this.add.text(game.config.width/2, game.config.height/2 - 0, 'https://pixabay.com/sound-effects/interface-124464/ ', menuConfig).setOrigin(0.5);
	
	this.add.text(game.config.width/2, game.config.height/2 + 50, 'https://pixabay.com/sound-effects/beep-6-96243/ ', menuConfig).setOrigin(0.5);
	
	this.add.text(game.config.width/2, game.config.height/2 + 100, 'https://pixabay.com/sound-effects/marimba-bloop-2-188149/ ', menuConfig).setOrigin(0.5);
	
	
	//this.add.text(game.config.width/2, game.config.height/2 + 50, 'Press R to restart', menuConfig).setOrigin(0.5);
	//this.add.image(game.config.width / 2, game.config.height / 4, 'spaceshipIcon');
    // Change button text colors for emphasis
    menuConfig.backgroundColor = '#A020F0'; // a different shade of purple
    menuConfig.color = '#FFFF00'; // yellow for contrast
    this.add.text(game.config.width/2, game.config.height/2 + borderUISize + 120 + borderPadding, 'Press SPACE to begin', menuConfig).setOrigin(0.5);
	
    // define keys
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
	
	
	keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

    update() {
		
		if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_start');
          this.scene.start("tutorialscene");    
        }
		
		
        
      }
}




// https://pixabay.com/music/upbeat-space-chillout-14194/