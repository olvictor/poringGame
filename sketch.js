let poring;
let grama;
let tamanho = 64;
let velocidade = 64;
let andarX = 0;
let andarY = 0;

function setup() {
  createCanvas(576, 576);
  poring = loadImage('poring.png');
  grama = loadImage('gray.png');
  carta = loadImage('carta.png')
  mvp = loadImage('mvp.png')
}

function draw() {
  background(220);
  if(andarX < 0) andarX = 0
  else if(andarY < 0) andarY = 0
  else if(andarX >= tamanho*8) andarX = tamanho*8
  else if(andarY >= tamanho*8) andarY = tamanho*8
  
  for(let x=0; x<9; x++){
    for(let y=0; y<9; y++){
      image(grama,tamanho*x,tamanho*y,tamanho,tamanho);
    }
   
  }
    
   image(carta,512,512,tamanho,tamanho)
   image(poring,andarX,andarY,tamanho,tamanho)
  
  
    
  if(andarX === 512 && andarY === 512){  
    image(mvp,140,100)
    restart =  createButton ('Reiniciar')
    restart.mousePressed(reseted)
    restart.position(250,310)
    noLoop()
  }
 
}

function reseted(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
  
}

function keyPressed(){
  if(keyIsDown(DOWN_ARROW)) andarY +=  velocidade
  
  if(keyIsDown(UP_ARROW)) andarY -=  velocidade

  if(keyIsDown(RIGHT_ARROW)) andarX +=  velocidade
  
  if(keyIsDown(LEFT_ARROW)) andarX -=  velocidade  

}
