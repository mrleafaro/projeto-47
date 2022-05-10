var bg,bg1
var estadoJogo=0
var fonte1 
var Start
var StartButton,fundo
var historia=[
  "Em uma cidade chamada Beach Valley existia uma praia que era muito poluída",
   "isso fez com que muitos animais marinhos morressem",
   "isso gerou uma reação em cadeia que fez com que muitos animais ficassem", 
   "sem o que comer",
   
  "então eles subiram e se adaptaram a superfície e então começaram a se alimentar de humanos",
  "os humanos foram rapidamente extintos daquela cidade se não fosse por um grupo de amigos",
   "que tiveram a coragem de enfrentar esses monstros",
  "Esses amigos descobriram que em uma mansão abandonada da cidade havia um diário",
   "de um minerador contando sobre pedras mágicas que davam poderes aos usuários"
]
var alex, ashley, john, luca
var p1,p2,p3,p4

var parte=0

function preload(){
  bg= loadImage("imagens/imagem de início.jpg")
  fonte1=loadFont("fontes/fonte1.ttf")
  Start=loadImage("imagens/StartButton.png")
  bg1=loadImage("imagens/imagem2.webp")
  alex=loadImage("imagens/Alex.png")
  ashley=loadImage("imagens/Ashley.png")
  john=loadImage("imagens/John.png")
  luca=loadImage("imagens/Luca.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  StartButton=createSprite((windowWidth)/2,500,100,100)
  StartButton.addImage(Start)
  StartButton.scale=0.5
  fundo=bg
  p1=createSprite((windowWidth/2)-650,windowHeight/2)
  p1.addImage(alex)
  p1.scale=0.8
  p1.visible=false
  p2=createSprite((windowWidth/2)-250,windowHeight/2)
  p2.addImage(ashley)
  p2.visible=false
  p3=createSprite((windowWidth/2)+100,windowHeight/2)
  p3.addImage(john)
  p3.visible=false
  p4=createSprite((windowWidth/2)+500,windowHeight/2)
  p4.addImage(luca)
  p4.visible=false
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
  if(estadoJogo===1){
    fill("black")
    textFont(fonte1,50)
    text(historia[parte],50,50)
    text("aperte espaço para avançar",windowWidth-510,windowHeight-50)
    if(parte===8){
      estadoJogo=2
    }
  }
  if(estadoJogo===2){
    fill("black")
    textFont(fonte1,50)
    text("clique em qualquer personagem para jogar",(windowWidth/2)-475,700)
    fill("black")
    textFont(fonte1,50)
    text("Alex",(windowWidth/2)-700,(windowHeight/2)-140)
    fill("black")
    textFont(fonte1,50)
    text("Ashley",(windowWidth/2)-300,(windowHeight/2)-140)
    fill("black")
    textFont(fonte1,50)
    text("John",(windowWidth/2)+50,(windowHeight/2)-140)
    fill("black")
    textFont(fonte1,50)
    text("Luca",(windowWidth/2)+450,(windowHeight/2)-140)
    p1.visible=true
    p2.visible=true
    p3.visible=true
    p4.visible=true
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
  function keyPressed(){
    console.log(keyCode)
    if(keyCode===32){
      parte++
    }
  }