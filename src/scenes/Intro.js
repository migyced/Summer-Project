class Intro extends Phaser.Scene{
    constructor(){
        super('introScene');
    }

    preload(){

    }

    create(){
        this.cameras.main.setBackgroundColor(Phaser.Display.Color(120, 120, 255));
        console.log("introScene loaded!");
    }

    update(){
        this.scene.start("firstScene");
    }
}