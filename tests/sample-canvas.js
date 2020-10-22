import canvas from 'canvas';

const colorBlack = '#000000';
const colorRed = '#ff0000';
const colorGreen = '#00ff00';
const colorBlue = '#0000ff';
const colorWhite = '#ffffff';

const drawableTypePicture = 0;
const drawableTypeText = 1;
const drawableTypeRectangle = 2;
const drawableTypeCircle = 3;
const drawableTypeTriangle = 4;

const filterGray = 0;
const filterRed = 1;
const filterGreen = 2;
const filterBlue = 4;

const sampleSize = {
	width: 800,
	height: 600
};

const samplePos = {
	x: 200,
	y: 300
};

const sampleArea = {
	x: 200,
	y: 300,
	width: 400,
	height: 200
};

const sampleFont = {
	size: 20,
	lineHeight: 20,
	weight: 400,
	italic: false,
	underlined: false,
	family: 'Open Sans'
};

const sampleStyle = {
	borderColor: colorBlack,
	fillColor: colorGreen
};

const sampleDrawablePicture = {
	type: drawableTypePicture,
	position: {x: 100, y: 200},
	imageData: canvas.createImageData(500, 400)
};

const sampleDrawableText = {
	type: drawableTypeText,
	position: {x: 10, y: 380},
	value: 'Drawable text preview',
	font: sampleFont,
	color: colorBlack
};

const sampleDrawableRectangle = {
	type: drawableTypeRectangle,
	points: [
		{x: 400, y: 300},
		{x: 800, y: 600}
	],
	style: {
		borderColor: colorRed,
		fillColor: colorBlack
	}
};

const sampleDrawableCircle = {
	type: drawableTypeCircle,
	center: {x: 400, y: 300},
	radius: 100,
	style: {
		borderColor: colorBlue,
		fillColor: colorWhite
	}
};

const sampleDrawableTriangle = {
	type: drawableTypeTriangle,
	points: [
		{x: 0, y: 0},
		{x: 0, y: 300},
		{x: 400, y: 300}
	],
	style: {
		borderColor: colorBlack,
		fillColor: colorGreen
	}
};

const sampleCanvas = canvas.createImageData(800, 600);

function createCanvas(size, background) {
	return sampleCanvas;
}
function resizeCanvas(canvas, size) {
	return canvas;
}
function cropCanvas(canvas, area) {
	return canvas;
}
function addToCanvas(canvas, drawable) {
	return canvas;
}
function applyCanvasFilter(canvas, filter) {
	return canvas;
}
function moveCanvasArea(canvas, sourceArea, destPos) {
	return canvas;
}
