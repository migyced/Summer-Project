let config = {
    type: Phaser.CANVAS,
    width: 1000/*window.innerWidth*/,
    height: 500/*window.innerHeight*/,
    scene: [Intro, First],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    }
};

let game = new Phaser.Game(config);

//Save player location
let L0StartX = window.innerWidth/2;
let L0StartY = window.innerHeight/2;


//control input
let leftKey, rightKey, upKey, downKey, spaceKey;
let menuKey;
let addBackgroundMusic = false;
let backgroundMusic;

