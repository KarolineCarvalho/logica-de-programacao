//Parâmetros da bolinha
var xBolinha = 300;
var yBolinha = 200;
var diametro = 25;
var raio = diametro / 2;

//Velocidade da Bolinha
var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;

//Variáveis da raquete
var xRaquete = 5;
var yRaquete = 150;
var larguraRaquete = 10;
var comprimentoRaquete = 90;

var colidiu = false;

//variáveis do oponente
var xRaqueteOponente = 585;
var yRaqueteOponente = 150;
var velocidadeYOponente;
    
//Placar do jogo
var meusPontos = 0;
var pontosOponente = 0;

//Sons do jogo
var raquetada;
var ponto;
var trilha;


let chanceDeErrar = 0;


function preload(){
  raquetada = loadSound('raquetada.wav');
  ponto = loadSound('ponto.wav');
  trilha = loadSound('trilha sonora.wav');
  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaMinhaRaquete();
    movementaRaqueteOponente();
    //verificaColisaoRaquete();
    verificaColisaolisaoRaquete(xRaquete, yRaquete);
    verificaColisaolisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
    
    
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function mostraRaquete(x,y) {
    rect(x, y, larguraRaquete, comprimentoRaquete);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio <0){
    velocidadeYBolinha *= -1;
  }
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW) && yRaquete > 0 ){
    yRaquete -= 10;
  }
  
   if(keyIsDown(DOWN_ARROW) && yRaquete + comprimentoRaquete < height){
    yRaquete += 10;
  }
}

function movementaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete /2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar();
}

function verificaColisaoRaquete(){
    if(xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + comprimentoRaquete && yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
      raquetada.play();
  }
}

function verificaColisaolisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, larguraRaquete, comprimentoRaquete, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOponente, 470, 26);
}


function marcaPonto() {
    if (xBolinha > 585) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 15) {
        pontosOponente += 1;
        ponto.play();
    }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
