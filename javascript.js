var Container = PIXI.Container,
	autoDetectRenderer = PIXI.autoDetectRenderer,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;
	
//set up renderer and stage
var renderer = autoDetectRenderer(512,512);
var stage = new Container();
document.body.appendChild(renderer.view);
scaleToWindow(renderer.view);

renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = 0xFFFFFF;

loader
	.add("pixie96x48.png")
	.load(setup);

var pixie;

function setup(){
pixie = new Sprite(resources["pixie96x48.png"].texture);
stage.addChild(pixie);
pixie.y = renderer.view.height / 2 - pixie.height / 2;
renderer.render(stage);
gameLoop();
}

function gameLoop(){
	requestAnimationFrame(gameLoop);
	pixie.x += 1;
	renderer.render(stage);
}

