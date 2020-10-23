type Color = string;
enum DrawableType{
	Picture,
	Text,
	Rectangle,
	Circle,
	Triangle
};
enum Filter{
	Gray = 0,
	Red = 1,
	Green = 2,
	Blue = 4
};
type Size = {
	width: number,
	height: number
};
type Pos = {
	x: number,
	y: number
};
type Area = Pos & Size;
type Font = {
	size: number,
	lineHeight: number,
	weight: number,
	italic: boolean,
	underlined: boolean,
	family: string
};
type Style = {
	borderColor: Color,
	fillColor: Color
};
type DrawablePicture = {
	type: DrawableType.Picture,
	position: Pos,
	imageData: ImageData
};
type DrawableText = {
	type: DrawableType.Text,
	position: Pos,
	value: string,
	font: Font,
	color: Color
};
type DrawableRectangle = {
	type: DrawableType.Rectangle,
	points: [Pos, Pos],
	style: Style
};
type DrawableCircle = {
	type: DrawableType.Circle,
	center: Pos,
	radius: number,
	style: Style
};
type DrawableTriangle = {
	type: DrawableType.Triangle,
	points: [Pos, Pos, Pos],
	style: Style
};
type Drawable = DrawablePicture | DrawableText | DrawableRectangle | DrawableCircle | DrawableTriangle;
type Canvas = ImageData;
