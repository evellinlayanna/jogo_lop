//imagens
var blackb, table, woman, lab, board, ballon, bequer, acido, base, sal, gameOver, win, fundoMenu, evellin, elizabete;
//coordenadas
var Xbalckb, Yblackb;
var Xtable,Ytable;
var Xwoman, Ywoman;
var Xlab, Ylab;
var Xboard, Yboard;
var Xballon, Yballon;
var Xbequer, Ybequer;
var Xacido, Yacido;
var Xbase, Ybase;
var Xsal, Ysal;
var XgameOver, YgameOver;
var Xnobel, Ynobel;
var XfundoMenu, YfundoMenu;
//colisões
var hitAcidoBequer;
var hitBaseBequer;
var hitSalBequer;
//outros
var score=0;
var life=5;
var nexa;
var music;
//menu
var Xcursor, Ycursor;
var Xstart, Ystart;
var Xinst, Yinst;
var Xcred, Ycred;
var estado=0.1;
var posicao_cursor=1;

function setup(){
  createCanvas(400, 400);
  textFont(nexa);
  Xblackb=0;
  Yblackb=0;
  Xtable=90;
  Ytable=280;
  Xwoman=3;
  Ywoman=120;
  Xlab=0;
  Ylab=0;
  Xboard=280;
  Yboard=10;
  Xballon=90;
  Yballon=10;
  Xbequer=200;
  Ybequer=265;
  Xacido=100;
  Yacido=0;
  Xbase=140;
  Ybase=0;
  Xsal=180;
  Ysal=0;
  XgameOver=-50;
  YgameOver=0;
  Xnobel=50;
  Ynobel=50;
  XfundoMenu=0;
  YfundoMenu=250;
  //menu
  Xcursor=120;
  Ycursor=130;
  Xstart=120;
  Ystart=130;
  Xinst=120;
  Yinst=200;
  Xcred=120;
  Ycred=270;
}

function draw(){
  if(estado==0.1){
    menu();
  }
  else if(estado==1){
    start_fase1();
  }
  else if(estado==0.2){
    instrucoes();
  }
  else if(estado==0.3){
    creditos();
  }
  else if(estado==2){
    fase2();
  }
  else if(estado==3){
    fase3();
  }
  else if(estado==4){
    Win();
  }
  else if(estado==5){
    GameOver();
  }
}

//mover caixa
function keyPressed(){
  //para descer
  if(Ycursor==Yinst && keyCode==DOWN_ARROW){
    Ycursor=Ycred;
    posicao_cursor=3;
  }
  if(Ycursor==Ystart && keyCode==DOWN_ARROW){
    Ycursor=Yinst;
    posicao_cursor=2;
  }
  if(Ycursor==Yinst && keyCode==UP_ARROW){
    Ycursor=Ystart;
    posicao_cursor=3;
  }
  if(Ycursor==Ycred && keyCode==UP_ARROW){
    Ycursor=Yinst;
    posicao_cursor=2;
  }
//clicar nos botões
  if(Ycursor==Ystart && keyCode==ENTER){
    estado=1;
    score=0;
    life=5;
    start_fase1();
  }
  if(Ycursor==Yinst && keyCode==ENTER){
     instrucoes();
   }
  if(Ycursor==Ycred && keyCode==ENTER){
    creditos();
  }
    
  if(keyCode==ESCAPE){
    if(estado==0.2 || estado==0.3 || estado==4 || estado==5){
      estado=0.1;
    }
  }
}

function preload(){
  nexa=loadFont('Nexa Bold.otf');
  blackb=loadImage('BlackBoard.png');
  lab=loadImage('Laboratorio.png');
  table=loadImage('Table.png');
  woman=loadImage('Woman.png');
  board=loadImage('Board.png');
  ballon=loadImage('Ballon.png');
  bequer=loadImage('Bequer.png');
  acido=loadImage('H2SO4.png');
  base=loadImage('CuOH.png');
  sal=loadImage('KNaSO4.png');
  gameOver=loadImage('Explosão.png');
  nobel=loadImage('Nobel.png');
  fundoMenu=loadImage('FundoMenu.png');
  evellin=loadImage('Evellin.png');
  elizabete=loadImage("Elizabete.png");
  music=loadSound('Music.mp3', playSound);
}

function playSound(){
  music.play();
}

function menu(){
  background(64,95,111,255);
  image(fundoMenu, XfundoMenu, YfundoMenu, 400, 150);
  fill("black");
  textSize(33);
  text("LABORATÓRIO MALUCO", 5, 35);
  textSize(30);
  fill("white");
  text("MENU", 150, 100);
  noFill();
  noStroke();
  rect(Xstart, Ystart, 150, 40);
  rect(Xinst, Yinst, 150, 40);
  rect(Xcred, Ycred, 150, 40);
  textSize(20);
  fill("white");
  text("START", 160, 160);
  text("INSTRUÇÕES", 130, 230);
  text("CRÉDITOS", 145, 300);
  noFill();
  stroke(200, 200, 0);
  rect(Xcursor, Ycursor, 150, 40);
}

function instrucoes(){
  background(0, 100, 50);
  estado=0.2;
  textSize(30);
  fill("white");
  text("INSTRUÇÕES", 100, 40);
  textSize(20);
    text("            Em nosso laboratório estamos"+"\n"+"            precisando de ajuda para criar"+"\n"+"         nossa solução ácida. Use as teclas"+"\n"+"            'DIREITA' e 'ESQUERDA' do seu"+"\n"+"    computador para mover o béquer. A"+"\n"+" cada 5 pontos você avança de fase, mas"+"\n"+"        cuidado! Podem aparecer outras"+"\n"+"      substâncias indesejáveis que NÃO"+"\n"+"    PODEM se misturar aos ácidos, ou o"+"\n"+"      resultado será explosivo. Boa sorte,"+"\n"+"                                futurx quimicx!", 10, 90);
  text("Pressione 'ESC' para voltar ao MENU.",50, 390);
}

function creditos(){
  background(0, 0, 200);
  estado=0.3;
  textSize(30);
  fill("white");
  text("CRÉDITOS", 130, 40);
  textSize(15);
  image(evellin, 150, 60, 100, 100);
  text("                               Programadora:"+"\n"+"      Evellin Layanna - Bacharelanda em"+"\n"+"                          Eng. da Computação ", 50, 180);
  image(elizabete, 150, 230, 100, 100);
  text("                              Educadora:"+"\n"+"Elizabete Bezerra - Professora do IFRN", 70, 350);
  text("Pressione 'ESC' para voltar ao MENU.",130, 390);
}

function start_fase1(){
  background(220);
  image(lab, Xlab, Ylab, 400, 400);
  image(table, Xtable, Ytable, 300, 150);
  image(woman, Xwoman, Ywoman, 110, 300);
  image(board, Xboard, Yboard, 120, 75);
  noStroke();
  textSize(17);
  fill("black");
  text("Score: "+score, 320, 40);
  text("Life: "+life, 320, 70);
  image(bequer, Xbequer, Ybequer, 40, 50);
  moveBequer();
  image(acido, Xacido, Yacido, 40, 40);
  moveAcido1();
  checkCollidAcido();
  image(base, Xbase, Ybase, 40, 40);
  moveBase1();
  checkCollidBase();
  /*image(ballon, Xballon, Yballon, 300, 200);
  textSize(16);
  text("Para a primeira fase do nosso" +"\n"+"experimento precisamos coletar" +"\n"+"os ÁCIDOS dentro no ellermayer." +"\n"+"Cuidado! Se algum elemento" +"\n"+"desconhecido reagir com nossa" +"\n"+"solução, pode não acabar bem...", 115, 38);*/
}

function moveBequer(){
  if(keyIsDown(LEFT_ARROW)){
    Xbequer=Xbequer-2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    Xbequer=Xbequer+2;
  }
}

function moveAcido1(){
  Yacido=Yacido+2;
  if(Yacido>=280){
    Yacido=0;
    Xacido=random(100, 350);
  }
}

function checkCollidAcido(){
  hitAcidoBequer=collideRectRect(Xacido, Yacido, 40, 40, Xbequer, Ybequer, 40, 50);
  if(hitAcidoBequer==true){
    score=score+1;
    Yacido=0;
    Xacido=random(100, 350);
  }
  if(score==5){
    estado=2;
  }
  if(score==10){
    estado=3;
  }
  if(score==15){
    estado=4;
  }
}

function moveBase1(){
  Ybase=Ybase+3;
  if(Ybase>=280){
    Ybase=0;
    Xbase=random(100, 350);
  }
}

function checkCollidBase(){
  hitBaseBequer=collideRectRect(Xbase, Ybase, 40, 40, Xbequer, Ybequer, 40, 50);
  if(hitBaseBequer==true){
    life=life-1;
    Ybase=0;
    Xbase=random(100, 350);
  }
  if(life<=0){
    life=0;
    estado=5;
  }
}

function fase2(){
  background(220);
  image(lab, Xlab, Ylab, 400, 400);
  image(table, Xtable, Ytable, 300, 150);
  image(woman, Xwoman, Ywoman, 110, 300);
  image(board, Xboard, Yboard, 120, 75);
  textSize(17);
  fill("black");
  text("Score: "+score, 320, 40);
  text("Life: "+life, 320, 70);
  image(bequer, Xbequer, Ybequer, 40, 50);
  moveBequer();
  image(acido, Xacido, Yacido, 40, 40);
  moveAcido2();
  checkCollidAcido();
  image(base, Xbase, Ybase, 40, 40);
  moveBase2();
  checkCollidBase();
  /*image(ballon, Xballon, Yballon, 300, 200);
  textSize(16);
  text("Parabéns e bem vindo a fase 2!" +"\n"+"Agora as coisa irão ficar um pouco" +"\n"+"mais difíceis. Desvie das BASES," +"\n"+"não queremos neutralizar nossa"+"\n"+"solução agora.", 112, 50);*/
}

function moveAcido2(){
  Yacido=Yacido+3;
  if(Yacido>=280){
    Yacido=0;
    Xacido=random(100, 350);
  }
}

function moveBase2(){
  Ybase=Ybase+4;
  if(Ybase>=280){
    Ybase=0;
    Xbase=random(100, 350);
  }
}

function fase3(){
  background(220);
  image(lab, Xlab, Ylab, 400, 400);
  image(table, Xtable, Ytable, 300, 150);
  image(woman, Xwoman, Ywoman, 110, 300);
  image(board, Xboard, Yboard, 120, 75);
  textSize(17);
  fill("black");
  text("Score: "+score, 320, 40);
  text("Life: "+life, 320, 70);
  image(bequer, Xbequer, Ybequer, 40, 50);
  moveBequer();
  image(acido, Xacido, Yacido, 40, 40);
  moveAcido3();
  checkCollidAcido();
  image(base, Xbase, Ybase, 40, 40);
  moveBase3();
  checkCollidBase();
  image(sal, Xsal, Ysal, 40, 40);
  moveSal3();
  checkCollidSal();
  /*image(ballon, Xballon, Yballon, 300, 200);
  textSize(16);
  text("Todo esse ácido e base estão" +"\n"+"formando SAIS. Não deixe que" +"\n"+"caiam na nossa solução também," +"\n"+"ou será tudo perdido...", 115, 55);*/
}

function moveAcido3(){
  Yacido=Yacido+4;
  if(Yacido>=280){
    Yacido=0;
    Xacido=random(100, 350);
  }
}

function moveBase3(){
  Ybase=Ybase+5;
  if(Ybase>=280){
    Ybase=0;
    Xbase=random(100, 350);
  }
}

function moveSal3(){
  Ysal=Ysal+3;
  if(Ysal>=280){
    Ysal=0;
    Xsal=random(100, 350);
  }
}

function checkCollidSal(){
  hitSalBequer=collideRectRect(Xsal, Ysal, 40, 40, Xbequer, Ybequer, 40, 50);
  if(hitSalBequer){
    life--;
    Ysal=0;
    Xsal=random(100, 350);
  }
  if(life<=0){
    life=0;
    estado=0;
  }
}
function Win(){
  background(0);
  image(nobel, Xnobel, Ynobel, 300, 300);
  noStroke();
  fill("yellow");
  textSize(20);
  text("       PARABÉNS! VOCÊ VENCEU."+"\n"+"ESTE É O SEU NOBEL DE QUÍMICA.", 35, 30);
  text("Pressione 'ESC' para voltar ao MENU.",50, 390);
  textSize(10);
  text("Marie Curie estaria orgulhosa de você!", 120, 335);
}

function GameOver(){
  background(400);
  image(gameOver, XgameOver, YgameOver, 490, 400);
  //textColor(white);
  noStroke();
  textSize(50);
  fill("black");
  text("BOOM! ", 120, 230);
  textSize(20);
  text("Pressione 'ESC' para voltar ao MENU.", 50, 390);
}
