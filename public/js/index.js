function loadImage(url)
{
	return new Promise(resolve => {
		const img = new Image();
		img.addEventListener("load", ()=>{
			resolve(img);
		})
		img.src = url;
	})
}

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width = 800;
const HEIGHT = canvas.height = 600;

(function setup()
{
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	loadImage('./image/tiles.png')
	.then(
		elm => ctx.drawImage(elm, 0, 0)
	);
})()