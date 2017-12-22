import Phaser from 'phaser';


export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game',
            width: '800',
            height: '600',
            backgroundColor: '#ff0303',
            physics: {
                system: 'arcade',
                arcade: {
                    debug: true
                }
            }
        });
        this.vel = 250;
    }

    preload() {
        this.load.setPath("./../assets");
        this.load.image('grassTiles', 'tilemaps/grassTiles.png');
        console.log('Loaded grass');
        this.load.image('rockTiles', 'tilemaps/rockTiles.png');
        console.log('Loaded rocks');
        this.load.image('adam', "sprites/adam.png");
        console.log('Loaded adam');
        this.load.tilemapJSON('field', 'tilemaps/field.json');
        console.log('Loaded the tilemap');

    }

    create() {

        console.log('Loading map');
        this.createMap();
        console.log('Map loaded');

        /*this.adam = this.add.image(200,200, 'adam');
        this.adam.setScale(0.2, 0.2);
        this.adam.setOrigin(0,0);
        this.physics.world.enable(this.adam);
        */
        this.physics.world.setBounds(0, 0, 1344, 992);
        this.adam = this.physics.add.image(200, 200, 'adam').setActive(true).setScale(0.2, 0.2).setVelocity(0, 0).setOrigin(0, 0);
        console.log(this.adam);
        this.adam.body.setCollideWorldBounds(true);
        console.log(this.physics);
        this.cameras.main.setPosition(0, 0);
        this.cameras.main.setBounds(0, 0, 1344, 992).centerToSize();
        this.cameras.main.startFollow(this.adam);
        console.log('Camera: ', this.cameras.main);
        this.debugGraphics = this.add.graphics();
        //this.debugGraphics.setScale(2);
        this.physics.world.addCollider(this.adam, this.grass);
        this.physics.world.addCollider(this.adam, this.rocks);
        this.physics.world.events.on('COLLIDE_EVENT', (event) => {
            console.log('Collision Detected')
        });
        this.map.renderDebug(this.debugGraphics);
        //this.adam.renderDebug(this.debugGraphics);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    createMap() {
        this.map = this.make.tilemap({key: 'field'});
        let grass = this.map.addTilesetImage('grassTiles');
        let rocks = this.map.addTilesetImage('rockTiles');

        this.grass = this.map.createStaticLayer('grass', grass, 0, 0);
        console.log('Grass Tile Layer: ', this.grass);
        this.rocks = this.map.createStaticLayer('rocks', rocks, 0, 0);
        console.log('Rocks Tile Layer: ', this.rocks);

        this.rocks.setCollisionBetween(1, 9, true);
        this.grass.setCollision(11, true);
        console.log('Tilemap: ', this.map);

    }

    update() {
        //console.log(this.rocks);
        this.physics.world.collide(this.adam, 'rocks', function () {
            console.log('hitting rocks!');
        });
        this.physics.world.collide(this.adam, this.rocks, function () {
            console.log('hitting rocks!');
        });
        this.physics.world.collide(this.adam, this.grass, function () {
            console.log('hitting grass!');
        });

        if (this.cursors.up.isDown) {
            this.adam.body.velocity.y = -this.vel;
            //console.log('x, y :', this.adam.body.x+', '+this.adam.body.y);
            //console.log('Camera: ', this.cameras.main);
        }
        else if (this.cursors.down.isDown) {
            this.adam.body.velocity.y = this.vel;
            //console.log('x, y :', this.adam.body.x+', '+this.adam.body.y);
            //console.log('Camera: ', this.cameras.main);
        }
        else {
            this.adam.body.velocity.y = 0;

        }
        if (this.cursors.left.isDown) {
            this.adam.body.velocity.x = -this.vel;
            //this.adam.setScale(-0.2,0.2);
            if (!this.adam.flipX) {
                this.adam.toggleFlipX();
            }
            //console.log('Camera: ', this.cameras.main);
            //console.log('x, y :', this.adam.body.x+', '+this.adam.body.y);
        }
        else if (this.cursors.right.isDown) {
            this.adam.body.velocity.x = this.vel;
            if (this.adam.flipX) {
                this.adam.toggleFlipX();
            }//this.adam.setScale(0.2,0.2);
            //console.log('Camera: ', this.cameras.main);
            //console.log('x, y :', this.adam.body.x+', '+this.adam.body.y);
        }
        else {
            this.adam.body.velocity.x = 0;

        }

        this.input.events.on('POINTER_DOWN_EVENT', function (event) {
            console.log('Mouse x, y: ', event.x + ', ' + event.y);
        });
    }
}