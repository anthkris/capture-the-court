var CapCourt = CapCourt || {};

CapCourt.Map = function(game, floorPool, numTiles, x, y, speed, coinsPool, enemiesPool, lifePool, enemySprite, player, firstPlatform) {
  Phaser.Group.call(this, game);
  this.game = game;
  this.floorPool = floorPool;
  this.coinsPool = coinsPool;
  this.lifePool = lifePool;
  this.enemiesPool = enemiesPool;
  this.enemySprite = enemySprite;
  this.player = player;
  this.tileSize = 96;
  this.enableBody = true;
  this.speed = speed;
  this.firstPlatform = firstPlatform;
  this.prepare(numTiles, x, y, speed, player);
};

CapCourt.Map.prototype = Object.create(Phaser.Group.prototype);
CapCourt.Map.prototype.constructor = CapCourt.Map;