var CapCourt = CapCourt || {};

CapCourt.GameState = {

  init: function() {

    /* INPUT */
    
    //enable cursor keys
    this.cursors = this.game.input.keyboard.createCursorKeys();

    /* GLOBAL GAME VARIABLES */

    /* GAME COLLECTIBLES */
    
    
  },
  create: function() {
    /* BACKGROUND */
    this.background = this.game.stage.backgroundColor = '#006994'; 
    this.mapBG = this.game.add.sprite(this.game.centerX, this.game.centerY, 'map', 'map.png');
    
    /* CAMERA  */
    //this.game.camera.bounds = null;
    
    /* PLAYER */
    this.player = this.game.add.sprite(400, 300, 'player');
    this.player.anchor.setTo(0.5);
    
    //player physics
    this.game.physics.arcade.enable(this.player);
    
    
    /* AUDIO BUTTON */
// 	CapCourt.game.audioButton = CapCourt.game.add.button(540, 50, 'audioButton', CapCourt.game.global.muteAudio, this, "audioOn.png", "audioOn.png", "audioOn.png", "audioOn.png");
// 	CapCourt.game.audioButton.anchor.setTo(0.5);
// 	CapCourt.game.audioButton.fixedToCamera = true;
// 	CapCourt.game.audioButton.cameraOffset.x = 60;
// 	CapCourt.game.audioButton.cameraOffset.y = this.game.world.height - 76;

    /* SOUNDS */
    //this.coinSound = this.add.audio('coin');
    
    /* LEVEL TIMERS */
    // this.nextLevelTimer = this.game.time.events.add(Phaser.Timer.SECOND * 50, this.nextLevel, this);
    // this.speedUpTimer = this.game.time.create(false);
    // this.speedUpTimer.loop(1500, this.goFaster, this);
    // this.speedUpTimer.start();
    // this.nextLevelTimer.timer.start();
    
    /* TEXT */
    // this.coinsCountLabel = this.add.bitmapText(60, 20, 'antiquaWhite', this.myCoins + '');
    // this.coinsCountLabel.anchor.setTo(0.5);
    // this.coinsCountLabel.fixedToCamera = true;
    
  },   
  update: function() {
    
    
    /* CHECK IF PLAYER NEEDS TO DIE */
  },
  gameOver: function() {
    //alive to false preserves rendering
    this.player.alive = false;
    this.updateHighScore();
    this.game.camera.fade(0x000000, 2000);
    this.game.state.start('GameOver', true, false, this.highScore, this.myCoins, this.maxLives);
  },
  render: function() {
    /* DEBUG PLAYER  */
    // this.game.debug.body(this.player);
    //this.game.debug.bodyInfo(this.player, 0, 30);
      
    /* DEBUG ENEMIES */
    // this.enemiesPool.forEach(function(enemy){
    // this.game.debug.body(enemy);
    // //this.game.debug.bodyInfo(enemy, 0, 30);
    // }, this);
  },
  restart: function() {
    this.game.state.start('Game', true, false);
  }
}