var CapCourt = CapCourt || {};

//loading the game assets
CapCourt.PreloadState = {
  preload: function() {
    /* LOADING BAR ASSETS */
    // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    // this.preloadBar.anchor.setTo(0.5);
    // this.load.setPreloadSprite(this.preloadBar);
    
    // //this.loadingText = this.add.bitmapText(this.game.world.centerX, this.game.world.centerY + 150, 'antiquaWhite', '0%', 40);
    // this.loadingText.anchor.x = 0.5;
    // this.game.load.onFileComplete.add(this.fileComplete, this);

    /* IMAGES */  
    this.load.image('player', 'assets/images/player.png');
    this.load.atlasJSONHash('map', 'assets/images/map.png', 'assets/images/map.json');
    
    /* AUDIO */
    //this.load.audio('coin', ['assets/audio/coin.mp3', 'assets/audio/coin.ogg']);
    
    /* FONTS */
    //this.load.bitmapFont('antiqua', 'assets/fonts/antiqua.png', 'assets/fonts/antiqua.xml');
  },
  create: function() {
      this.state.start('Game');
  },
  update: function() {},
  fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
    this.loadingText.text = progress + "%";
  }
  
};