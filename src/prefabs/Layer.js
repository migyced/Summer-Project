class Layer extends Phaser.GameObjects.TileSprite
{
    constructor(scene, x, y, width, height, texture, frame, allowGravity, immovable)
    {
        super(scene, x, y, width, height, texture, frame);
        this.setOrigin(0);
        scene.physics.add.existing(this);
        scene.add.existing(this);
        this.isMoving = false;
        this.speed = 3;
        if(allowGravity)
        {
            this.body.setAllowGravity(true);
        }
        else
        {
            this.body.setAllowGravity(false);
        }
        if(immovable)
        {
            this.body.immovable = true;
        }
        else
        {
            this.body.immovable = false;
        }
    }

    update()
    {
        if(this.isMoving)
        {
            if(this.x < 0)
            {
                this.speed = -this.speed;
            }
            else if(this.x > window.innerWidth)
            {
                this.speed = -this.speed;
            }
            if(this.y < 0 || this.y > window.innerHeight)
            {
                this.speed = -this.speed;
            }
            this.x += this.speed;
            this.y += this.speed;
        }
    }
}