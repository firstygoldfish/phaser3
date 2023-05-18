import Phaser from 'phaser';
const config = {
	// WebGL (Web Graphics Library) JS API for rendering 2d and 3d graphics
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		// Arcade physics plugin, manages physics simulation (Arcade simple physics)
		default: 'arcade',
		arcade: {
			debug: true
		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
}

function preload() {
  // Loading assets
  // 'this' context = scene
	this.load.image('background', 'assets/sky.png');
	this.load.image('bird', 'assets/bird.png');
}

let bird = null;
let totalDelta = null;
let velocity = 200;

function create() {
  // Initialising objects
	// x, y, key of image
	// Origin 0.5,0.5 default
	this.add.image(0, 0, 'background').setOrigin(0, 0);
	bird = this.physics.add.sprite(10, config.height / 2, 'bird').setOrigin(0.5, 0.5);  // Added to physics
	//bird.body.gravity.y = 100; //100px/sec
	bird.body.velocity.x = velocity;
	//debugger;
}

function update(time, delta) {
	if (bird.x >= config.width - (bird.width / 2)) { bird.body.velocity.x = -velocity; }
	else if (bird.x <= (bird.width / 2)) { bird.body.velocity.x = velocity; }
}

new Phaser.Game(config);

