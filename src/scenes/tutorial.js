class Tutorial extends Phaser.Scene {
    constructor() {
        super("tutorialscene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
		this.load.image('spaceshipIcon', './assets/spaceship.png');
    }

    create() {
		
		let spaceshipIcon = this.add.image(game.config.width / 2, game.config.height / 4 + 40, 'spaceshipIcon');
    spaceshipIcon.setScale(0.5);
	
		

	
	
        // menu text configuration
        let menuConfig = {
        fontFamily: 'Verdana', // changed font
        fontSize: '32px', // slightly larger text
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
    this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding - 130, 'How To Play', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2 -70, 'Use ←→ arrows to move', menuConfig).setOrigin(0.5);
	this.add.text(game.config.width/2, game.config.height/2 -10, 'Avoid as many astroids as possible', menuConfig).setOrigin(0.5);
	this.add.text(game.config.width/2, game.config.height/2 + 50, 'Press R to restart', menuConfig).setOrigin(0.5);
	//this.add.image(game.config.width / 2, game.config.height / 4, 'spaceshipIcon');
    // Change button text colors for emphasis
    menuConfig.backgroundColor = '#A020F0'; // a different shade of purple
    menuConfig.color = '#FFFF00'; // yellow for contrast
    this.add.text(game.config.width/2, game.config.height/2 + borderUISize + 90 + borderPadding, 'Press SPACE to begin', menuConfig).setOrigin(0.5);
	
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
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
		
		
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
}