var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(690,580,200,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(490,580,190,30);
    bloco2.shapeColor = "red";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bloco3 = createSprite(295, 580, 190,30);
    bloco3.shapeColor = "yellow";

    bloco4 = createSprite(100, 580, 190,30);
    bloco4.shapeColor = "green";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = random(-10, 10);
    bola.velocityY = random(-10, 10);
}

function SoundCheck(){
    if(bola.isTouching(bloco1) || bola.isTouching(bloco3) || 
    bola.isTouching(bloco4)){
        music.play();
    }
}

function draw() {
    SoundCheck();
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);
    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = bloco1.shapeColor;
    }

    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = bloco3.shapeColor;
    }

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = bloco4.shapeColor;
    }

    if(bloco2.isTouching(bola)){
        bola.shapeColor = bloco2.shapeColor;
        bola.velocityX = 0;
        bola.velocityY = 0;
        music.stop();
    }

    drawSprites();
}