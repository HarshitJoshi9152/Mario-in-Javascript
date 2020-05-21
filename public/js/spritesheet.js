class SpriteSheet
{
	constructor(img, width, height)
	{
		this.img = img,
		this.posx = posx,
		this.posy = posy
	}

	draw = function(id, ctx, posx, posy)
	{
		ctx.drawImage(this.tray[id], posx, posy);
	}
}