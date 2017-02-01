var CapCourt = CapCourt || {};

CapCourt.game = new Phaser.Game(1920, 1080, Phaser.CANVAS);

// CapCourt.game.global = {
// 	 muteAudio: function() {
// 		 if (CapCourt.game.adventureMusic.isPlaying === true) {
// 			 CapCourt.game.adventureMusic.stop();
// 		 	 CapCourt.game.audioButton.frame = 'audioOff.png';
// 		 } else if (CapCourt.game.adventureMusic.isPlaying === false) {
// 			 CapCourt.game.audioButton.frame = 'audioOn.png';
// 			 CapCourt.game.adventureMusic.play();
// 		 } 
// 	 }
// };

CapCourt.game.state.add('Boot', CapCourt.BootState);
CapCourt.game.state.add('Preload', CapCourt.PreloadState);
//CapCourt.game.state.add('Menu', CapCourt.MenuState);
CapCourt.game.state.add('Game', CapCourt.GameState);
// CapCourt.game.state.add('GameOver', CapCourt.GameOverState);

CapCourt.game.state.start('Boot');
