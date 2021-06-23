class First extends Phaser.Scene {
    constructor(){
        super('firstScene');
    }

    preload(){

    }

    create(){
        this.cameras.main.setBackgroundColor(Phaser.Display.Color(0, 0, 0));
        console.log("firstScene loaded!");
    }

    update(){

    }
}