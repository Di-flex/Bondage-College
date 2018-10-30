var CreateCharacter_BodySizeList = ["Small", "Normal", "Large", "XLarge"];
var CreateCharacter_SkinColorList = ["White", "Asian", "Black"];
var CreateCharacter_EyesStyleList = ["Eyes1", "Eyes2", "Eyes3", "Eyes4", "Eyes5", "Eyes6", "Eyes7", "Eyes8", "Eyes9", "Eyes10", "Eyes11"];
var CreateCharacter_EyesColorList = ["#6a3628", "#5e481e", "#63390f", "#666666", "#555588", "#558855", "#885555", "#222222"];
var CreateCharacter_HairStyleList = ["Hair1", "Hair2", "Hair3", "Hair4", "Hair5", "Hair6", "Hair7", "Hair8", "Hair9"];
var CreateCharacter_HairColorList = ["#202020", "#6a3628", "#dcc787", "#6c2132", "#999999", "#dddddd", "#e781b1", "#81e7b1", "#81b1e7", "#eeee99", "#ee9999", "#ee99ee"];
var CreateCharacter_BodySize = 0;
var CreateCharacter_SkinColor = 0;
var CreateCharacter_EyesStyle = 0;
var CreateCharacter_EyesColor = 0;
var CreateCharacter_HairStyle = 0;
var CreateCharacter_HairColor = 0;
var CreateCharacter_ClothList = ["StudentOutfit1", "StudentOutfit2", ""];
var CreateCharacter_BraStyleList = ["Bra1", "Bra2", "Bra7", ""];
var CreateCharacter_BraColorList = ["#bbbbbb", "#808080", "#222222", "#bb8080", "#80bb80", "#8080bb", "#bbbb80", "#80bbbb", "#bb80bb"];
var CreateCharacter_PantiesStyleList = ["Panties1", "Panties7", "Panties8", "Panties11", ""];
var CreateCharacter_PantiesColorList = ["#bbbbbb", "#808080", "#222222", "#bb8080", "#80bb80", "#8080bb", "#bbbb80", "#80bbbb", "#bb80bb"];
var CreateCharacter_SocksStyleList = ["Socks5", "Socks1", "Socks2", "Socks3", "Socks4", ""];
var CreateCharacter_SocksColorList = ["#bbbbbb", "#808080", "#222222", "#bb8080", "#80bb80", "#8080bb", "#bbbb80", "#80bbbb", "#bb80bb"];
var CreateCharacter_Cloth = 0;
var CreateCharacter_BraStyle = 0;
var CreateCharacter_BraColor = 0;
var CreateCharacter_PantiesStyle = 0;
var CreateCharacter_PantiesColor = 0;
var CreateCharacter_SocksStyle = 0;
var CreateCharacter_SocksColor = 0;

function DrawCharacter(X, Y, Zoom) {
	var seconds = new Date().getTime();
    TempCanvas.canvas.width = 500 * Zoom;
    TempCanvas.canvas.height = 1000 * Zoom;
	DrawImageZoomCanvas("Model/Body/" + CreateCharacter_SkinColorList[CreateCharacter_SkinColor] + "_" + CreateCharacter_BodySizeList[CreateCharacter_BodySize] + ".png", TempCanvas, 0, 0, 500, 1000, 0, 0, 500 * Zoom, 1000 * Zoom);
	if (Math.round(seconds / 500) % 15 != 0) DrawImageColorize("Model/Eyes/" + CreateCharacter_EyesStyleList[CreateCharacter_EyesStyle] + ".png", TempCanvas, 200 * Zoom, 150 * Zoom, Zoom, CreateCharacter_EyesColorList[CreateCharacter_EyesColor], false);
	if (CreateCharacter_BraStyleList[CreateCharacter_BraStyle] != "") DrawImageColorize("Model/Bra/" + CreateCharacter_BraStyleList[CreateCharacter_BraStyle] + "_" + CreateCharacter_BodySizeList[CreateCharacter_BodySize] + ".png", TempCanvas, 150 * Zoom, 200 * Zoom, Zoom, CreateCharacter_BraColorList[CreateCharacter_BraColor], true);
	if (CreateCharacter_PantiesStyleList[CreateCharacter_PantiesStyle] != "") DrawImageColorize("Model/Panties/" + CreateCharacter_PantiesStyleList[CreateCharacter_PantiesStyle] + "_" + CreateCharacter_BodySizeList[CreateCharacter_BodySize] + ".png", TempCanvas, 150 * Zoom, 450 * Zoom, Zoom, CreateCharacter_PantiesColorList[CreateCharacter_PantiesColor], true);
	if (CreateCharacter_SocksStyleList[CreateCharacter_SocksStyle] != "") DrawImageColorize("Model/Socks/" + CreateCharacter_SocksStyleList[CreateCharacter_SocksStyle] + "_" + CreateCharacter_BodySizeList[CreateCharacter_BodySize] + ".png", TempCanvas, 125 * Zoom, 500 * Zoom, Zoom, CreateCharacter_SocksColorList[CreateCharacter_SocksColor], true);
	if (CreateCharacter_ClothList[CreateCharacter_Cloth] != "") DrawImageZoomCanvas("Model/Cloth/" + CreateCharacter_ClothList[CreateCharacter_Cloth] + "_" + CreateCharacter_BodySizeList[CreateCharacter_BodySize] + ".png", TempCanvas, 0, 0, 500, 1000, 0, 0, 500 * Zoom, 1000 * Zoom);
	DrawImageColorize("Model/Hair/" + CreateCharacter_HairStyleList[CreateCharacter_HairStyle] + ".png", TempCanvas, 150 * Zoom, 50 * Zoom, Zoom, CreateCharacter_HairColorList[CreateCharacter_HairColor], true);
	MainCanvas.drawImage(TempCanvas.canvas, X, Y);
}

function CreateCharacter_Run() {
	DrawRect(0, 0, 2000, 1000, "#888888");
	DrawCharacter(1000, 0, 1);
	DrawCharacter(-700, -250, 5);
	DrawButton(1500, 50, 225, 75, "Randomize");
	DrawButton(1500, 150, 225, 75, "Skin Color " + CreateCharacter_SkinColor.toString());
	DrawButton(1500, 250, 225, 75, "Body Size " + CreateCharacter_BodySize.toString());
	DrawButton(1500, 350, 225, 75, "Eyes Style " + CreateCharacter_EyesStyle.toString());
	DrawButton(1500, 450, 225, 75, "Eyes Color " + CreateCharacter_EyesColor.toString());
	DrawButton(1500, 550, 225, 75, "Hair Style " + CreateCharacter_HairStyle.toString());
	DrawButton(1500, 650, 225, 75, "Hair Color " + CreateCharacter_HairColor.toString());	

	DrawButton(1750, 50, 225, 75, "Outfit " + CreateCharacter_Cloth.toString());
	DrawButton(1750, 150, 225, 75, "Bra Style " + CreateCharacter_BraStyle.toString());
	DrawButton(1750, 250, 225, 75, "Bra Color " + CreateCharacter_BraColor.toString());
	DrawButton(1750, 350, 225, 75, "Panties Style " + CreateCharacter_PantiesStyle.toString());
	DrawButton(1750, 450, 225, 75, "Panties Color " + CreateCharacter_PantiesColor.toString());
	DrawButton(1750, 550, 225, 75, "Socks Style " + CreateCharacter_SocksStyle.toString());
	DrawButton(1750, 650, 225, 75, "Socks Color " + CreateCharacter_SocksColor.toString());
	
}

function CreateCharacter_NextItem(ÌtemPos, List) {
	ÌtemPos++;
	if (ÌtemPos >= List.length) ÌtemPos = 0;
	return ÌtemPos;
}


function CreateCharacter_Randomize(List) {
	return Math.round(Math.random() * (List.length - 1));
}

function CreateCharacter_RandomizeAll() {
	CreateCharacter_SkinColor = CreateCharacter_Randomize(CreateCharacter_SkinColorList);
	CreateCharacter_BodySize = CreateCharacter_Randomize(CreateCharacter_BodySizeList);
	CreateCharacter_EyesStyle = CreateCharacter_Randomize(CreateCharacter_EyesStyleList);
	CreateCharacter_EyesColor = CreateCharacter_Randomize(CreateCharacter_EyesColorList);
	CreateCharacter_HairStyle = CreateCharacter_Randomize(CreateCharacter_HairStyleList);
	CreateCharacter_HairColor = CreateCharacter_Randomize(CreateCharacter_HairColorList);
	CreateCharacter_Cloth = CreateCharacter_Randomize(CreateCharacter_ClothList);
	CreateCharacter_BraStyle = CreateCharacter_Randomize(CreateCharacter_BraStyleList);
	CreateCharacter_BraColor = CreateCharacter_Randomize(CreateCharacter_BraColorList);
	CreateCharacter_PantiesStyle = CreateCharacter_Randomize(CreateCharacter_PantiesStyleList);
	CreateCharacter_PantiesColor = CreateCharacter_Randomize(CreateCharacter_PantiesColorList);
	CreateCharacter_SocksStyle = CreateCharacter_Randomize(CreateCharacter_SocksStyleList);
	CreateCharacter_SocksColor = CreateCharacter_Randomize(CreateCharacter_SocksColorList);
}

function CreateCharacter_Click() {

	if ((MouseX >= 1500) && (MouseX < 1725) && (MouseY >= 50) && (MouseY < 125)) CreateCharacter_RandomizeAll();
	if ((MouseX >= 1500) && (MouseX < 1725) && (MouseY >= 150) && (MouseY < 225)) CreateCharacter_SkinColor = CreateCharacter_NextItem(CreateCharacter_SkinColor, CreateCharacter_SkinColorList);
	if ((MouseX >= 1500) && (MouseX < 1725) && (MouseY >= 250) && (MouseY < 325)) CreateCharacter_BodySize = CreateCharacter_NextItem(CreateCharacter_BodySize, CreateCharacter_BodySizeList);
	if ((MouseX >= 1500) && (MouseX < 1725) && (MouseY >= 350) && (MouseY < 425)) CreateCharacter_EyesStyle = CreateCharacter_NextItem(CreateCharacter_EyesStyle, CreateCharacter_EyesStyleList);
	if ((MouseX >= 1500) && (MouseX < 1725) && (MouseY >= 450) && (MouseY < 525)) CreateCharacter_EyesColor = CreateCharacter_NextItem(CreateCharacter_EyesColor, CreateCharacter_EyesColorList);
	if ((MouseX >= 1500) && (MouseX < 1725) && (MouseY >= 550) && (MouseY < 625)) CreateCharacter_HairStyle = CreateCharacter_NextItem(CreateCharacter_HairStyle, CreateCharacter_HairStyleList);
	if ((MouseX >= 1500) && (MouseX < 1725) && (MouseY >= 650) && (MouseY < 725)) CreateCharacter_HairColor = CreateCharacter_NextItem(CreateCharacter_HairColor, CreateCharacter_HairColorList);
	
	if ((MouseX >= 1750) && (MouseX < 1975) && (MouseY >= 50) && (MouseY < 125)) CreateCharacter_Cloth = CreateCharacter_NextItem(CreateCharacter_Cloth, CreateCharacter_ClothList);
	if ((MouseX >= 1750) && (MouseX < 1975) && (MouseY >= 150) && (MouseY < 225)) CreateCharacter_BraStyle = CreateCharacter_NextItem(CreateCharacter_BraStyle, CreateCharacter_BraStyleList);
	if ((MouseX >= 1750) && (MouseX < 1975) && (MouseY >= 250) && (MouseY < 325)) CreateCharacter_BraColor = CreateCharacter_NextItem(CreateCharacter_BraColor, CreateCharacter_BraColorList);
	if ((MouseX >= 1750) && (MouseX < 1975) && (MouseY >= 350) && (MouseY < 425)) CreateCharacter_PantiesStyle = CreateCharacter_NextItem(CreateCharacter_PantiesStyle, CreateCharacter_PantiesStyleList);
	if ((MouseX >= 1750) && (MouseX < 1975) && (MouseY >= 450) && (MouseY < 525)) CreateCharacter_PantiesColor = CreateCharacter_NextItem(CreateCharacter_PantiesColor, CreateCharacter_PantiesColorList);
	if ((MouseX >= 1750) && (MouseX < 1975) && (MouseY >= 550) && (MouseY < 625)) CreateCharacter_SocksStyle = CreateCharacter_NextItem(CreateCharacter_SocksStyle, CreateCharacter_SocksStyleList);
	if ((MouseX >= 1750) && (MouseX < 1975) && (MouseY >= 650) && (MouseY < 725)) CreateCharacter_SocksColor = CreateCharacter_NextItem(CreateCharacter_SocksColor, CreateCharacter_SocksColorList);
	
}

function CreateCharacter_KeyDown() {
}
