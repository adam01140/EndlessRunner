// Rocket prefab
//import { turns } from './Play.js';
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, currentPlayer, p1Score, p2Score, scoreLeft) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.moveSpeed = 2;         // pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket')  // add rocket sfx
        this.currentPlayer = currentPlayer;
    this.p1Score = p1Score;
    this.p2Score = p2Score;
    this.scoreLeft = scoreLeft;
		 // Mouse movement event
		 
		 
		 /*
    scene.input.on('pointermove', (pointer) => {
        if (!this.isFiring) {
            this.x = Phaser.Math.Clamp(pointer.x, borderUISize + this.width, game.config.width - borderUISize - this.width);
        }
    });
	*/
	
	
	
	
		
		

    // Mouse click event
    scene.input.on('pointerdown', (pointer) => {
        if (!this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }
    });

    }

    update() {
        // left/right movement

            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            }
		
			if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width - game.config.width/3.8) {
                this.x += this.moveSpeed;
				
            }
			
			if (keyUP.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.y -= this.moveSpeed;
            }
			
			if (keyDOWN.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.y += this.moveSpeed;
            }
        
		
		/*
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
		*/

		
		
		
		
		
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
			this.scene.clock.elapsed += 3000; // Subtracts 3 seconds from the clock

			// Switch current player
			
			//alert(this.currentPlayer)
    
	
	
	if(this.scene.currentPlayer == 1) {
            this.scene.currentPlayer = 2;
        } else if(this.scene.currentPlayer == 2) {
            this.scene.currentPlayer = 1;
        }
		
		
	//this.scene.updateScoreDisplay();
		
		}
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
