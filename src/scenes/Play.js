class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
		
		this.load.image('particle', './assets/particle.png');

        // load images/tile sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        // load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
    }

    create() {
		
		
		
		this.currentPlayer = 1; // Start with player 1
        this.p1Score = 0;
        this.p2Score = 0;
		this.scoreLeft = 0;
		this.hey = 0;

		this.rock = 0;
		
		this.spaceships = [];

        // Define the space key
        this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
		

        // define keys for both players
        this.keyFPlayer1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyFPlayer2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
		
		
		
		this.timeLeftText = this.add.text(borderUISize + borderPadding, borderUISize * 2 + borderPadding * 2, 'Score: 0', { fontSize: '40px', fill: '#FFFFFF' });
		this.hello = this.add.text(borderUISize + borderPadding, borderUISize * 2 + borderPadding * 3, 'hello', { fontSize: '28px', fill: '#FFFFFF' });

        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        // add Rocket (p1)
        
		// Pass the currentPlayer as a property of the scene when creating the Rocket object

// Pass this.scoreLeft as a parameter when creating the Rocket object
this.p1Rocket = new Rocket(
    this,
    game.config.width/4,
    game.config.height - borderUISize*6 - borderPadding,
    'rocket',
    0,
    this.currentPlayer,
    this.p1Score,
    this.p2Score,
    this.scoreLeft
	//this.hey
	
);

let randomy = Phaser.Math.Between(borderUISize * 4, borderUISize * 13);

let randomx = Phaser.Math.Between(borderUISize * 4, borderUISize * 18);
		
        this.ship01 = new Spaceship(this, game.config.width+Phaser.Math.Between(borderUISize * 4, borderUISize * 18), (Phaser.Math.Between(borderUISize * 4, borderUISize * 13)), 'spaceship', 0, 30).setOrigin(0, 0);

        this.ship02 = new Spaceship(this, game.config.width+Phaser.Math.Between(borderUISize * 4, borderUISize * 18), (Phaser.Math.Between(borderUISize * 4, borderUISize * 13)), 'spaceship', 0, 20).setOrigin(0,0);

        this.ship03 = new Spaceship(this, game.config.width+Phaser.Math.Between(borderUISize * 4, borderUISize * 18), borderUISize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0,0);
		

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
		keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
		keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
		
		
        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { 
                start: 0, 
                end: 9, 
                first: 0
            }),
            frameRate: 30
        });

        // initialize score
        this.p1Score = 0;

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*3.7,  this.rock, scoreConfig);
		this.hey = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*1,  'WAVE:', scoreConfig);
		this.scoreLeft.setText('' + this.rock);
		
		
		
		
		this.timeLeftText = this.add.text(borderUISize + borderPadding + 150, borderUISize * 1 + borderPadding * 2, 'Score: 0', { fontSize: '40px', fill: '#FFFFFF' });
		
		//this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        // GAME OVER flag
        this.gameOver = false;

        // 60-second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            //this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            //this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← to Menu', scoreConfig).setOrigin(0.5);
            //this.gameOver = true;
        }, null, this);
    }


	
	
    update() {
			
		
		if (Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
			
			
			//let randomY = Phaser.Math.Between(borderUISize * 4, borderUISize * 13);
			//let randomX = Phaser.Math.Between(borderUISize * 4, borderUISize * 18);
            let newSpaceship = new Spaceship(this, game.config.width+ Phaser.Math.Between(borderUISize * 4, borderUISize * 18), Phaser.Math.Between(borderUISize * 4, borderUISize * 13), 'spaceship', 0, 30).setOrigin(0, 0);
            this.spaceships.push(newSpaceship);
        }

        
		
		
		
	
		if (!this.gameOver) {
            const elapsedTime = this.clock.getElapsed();
            const remainingTime = Math.ceil((this.game.settings.gameTimer + elapsedTime - 60) / 1000);
            this.timeLeftText.setText('Score: ' + (remainingTime-60));
			//this.hello.setText('Player: ' + this.currentPlayer);
			
			
			if(this.currentPlayer == 1){
				//this.scoreLeft.text = this.p1Score; 
			} else if(this.currentPlayer == 2){  
				//this.scoreLeft.text = this.p2Score; 
			}
        }



        // check key input for restart / menu
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }

        this.starfield.tilePositionX -= 4;  // update tile sprite

        if(!this.gameOver) {
            this.p1Rocket.update();             // update p1
            this.ship01.update(); 


	
			if(this.ship01.x <= 0) {
				
			//alert(this.rock);
			this.rock = this.rock + 1
			
			let newSpaceship = new Spaceship(this, game.config.width+ Phaser.Math.Between(0, borderUISize * 18), Phaser.Math.Between(borderUISize * 4, borderUISize * 13), 'spaceship', 0, 30).setOrigin(0, 0);
            this.spaceships.push(newSpaceship);
			this.scoreLeft.setText('' + this.rock);
			
			//alert(this.rock);
			//this.ship01.alpha = 0;
			//this.ship01.reset();
			
			
			//this.ship01.y = Phaser.Math.Between(borderUISize * 4, borderUISize * 13);
			this.ship01.reset();
			
			//alert('hey')
			
			}
			
			
			
				
				
        this.spaceships.forEach(spaceship => {
            spaceship.update(); // Assuming Spaceship class has an update method for movement or animation

			if (this.checkCollision(this.p1Rocket, spaceship)) {
            this.p1Rocket.reset();
            this.shipExplode(spaceship);
        }
            // Example collision check with player rocket (assuming rocket is defined)
            // if (checkCollision(this.rocket, spaceship)) {
            //     spaceship.destroy(); // Placeholder for collision handling
            // }
        });
        }
		
		

        // check collisions
        if(this.checkCollision(this.p1Rocket, this.ship03)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
        }
		if (this.checkCollision(this.p1Rocket, this.spaceships)) {
            this.p1Rocket.reset();
            this.shipExplode(this.spaceships);
        }
    }

    checkCollision(rocket, ship) {
        // simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width/3 > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height/3 + rocket.y > ship. y) {
                return true;
        } else {
            return false;
        }
    }

    shipExplode(ship) {
		
		this.clock.elapsed -= 5000; // Adds 5 seconds to the clock
		
		  let emitter = this.add.particles('particle', {
        x: ship.x,
        y: ship.y,
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD',
        lifespan: 600
    });

    // Optionally, destroy the emitter after a short duration
    this.time.delayedCall(600, () => {
        emitter.destroy(); // This will remove the emitter from the scene
    });
    
	
        // temporarily hide ship
        ship.alpha = 0;                         
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
            ship.reset();                         // reset ship position
            ship.alpha = 1;                       // make ship visible again
            boom.destroy();                       // remove explosion sprite
        });
        // score add and repaint
		
		
		if(this.currentPlayer == 1){
		this.scoreLeft.setText(' ' + this.rock);
		//alert("player 1 turns to player 2");
        }
		
		
        this.sound.play('sfx_explosion');
      }
	  
	  
	  
}

