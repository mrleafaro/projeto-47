var bg,bg1
var estadoJogo=0
var fonte1 
var Start
var StartButton,fundo
var texto1="era uma vez"
var texto2="em uma cidade bonita"
function preload(){
  bg= loadImage("imagens/imagem de início.jpg")
  fonte1=loadFont("fontes/fonte1.ttf")
  Start=loadImage("imagens/StartButton.png")
  bg1=loadImage("imagens/imagem2.webp")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  StartButton=createSprite((windowWidth)/2,500,100,100)
  StartButton.addImage(Start)
  StartButton.scale=0.5
  fundo=bg
}
function draw() {
  background(fundo);
  if(estadoJogo===0){
    fill("black")
    //textSize(100)
    textFont(fonte1,120)
    text("Beach Valley", (windowWidth-500)/2,300)
    if(mousePressedOver(StartButton)){
      estadoJogo=1
      StartButton.visible=false
      mudarFundo()
    }
    
    
  }
  drawSprites();
  }
  function mudarFundo(){
    if(estadoJogo==0){
      fundo=bg
    }
    else if(estadoJogo===1){
      fundo=bg1
    }
  }