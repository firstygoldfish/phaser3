import Phaser from 'phaser';

const config = {
	// WebGL (Web Graphics Library) JS API for rendering 2d and 3d graphics
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		// Arcade physics plugin, manages physics simulation (Arcade simple physics)
		default: 'arcade'
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
}

function preload() {
	this.load.image('background', 'assets/sky.png');
	this.load.image('bird', 'assets/bird.png');
}

let bird = null;

function create() {
	// x, y, key of image
	//this.add.image(config.width / 2, config.height / 2, 'tardis'); //(400, 300)
	// Origin 0.5,0.5 default
	//this.add.image(config.width / 2, config.height / 2, 'tardis').setOrigin(0.5,0.5); //(400, 300)
	this.add.image(0, 0, 'background').setOrigin(0, 0);
	bird = this.physics.add.sprite(config.width / 2, 50, 'bird').setOrigin(0.5, 0.5);
	bird.body.gravity.y = 100; //150px/sec
	//debugger;
}

function update(time, delta) {
	//console.log(delta);
}

new Phaser.Game(config);

