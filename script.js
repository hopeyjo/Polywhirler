var car1 = new Image();
car1.src = "resources/car1.png";
var car2 = new Image();
car2.src = "resources/car2.png";
var car3 = new Image();
car3.src = "resources/car3.png";
var car4 = new Image();
car4.src = "resources/car4.png";
var car5 = new Image();
car5.src = "resources/car5.png";

var log1 = new Image();
log1.src = "resources/log.png";
var log2 = new Image();
log2.src = "resources/log2.png";

var frog = new Image();
frog.src = "resources/frog.png";

var snake = new Image();
snake.src = "resources/snake.png";

var heart = new Image();
heart.src = "resources/heart.png";

var lilypad = new Image();
lilypad.src = "resources/lilypad.png";

var star = new Image();
star.src = "resources/star.png";

var a;
var frogger;
var froggerSlot1;
var froggerSlot2;
var froggerSlot3;
var froggerSlot4;
var froggerSlot5;
var snakeLorR;

var hearts = [];
var carArray1 = [];
var logs = [];
var lilypads = [];
var playersScores = [0];

var levelZero = 8
var levelOne = 11;
var levelThree = 14;

var lives = 3;
var gameLevel = 0;
var froggersInSlots = 0;

var carSection = true;
var waterSection = false;
var logCollide = false;

function drawBackground() {
    drawGrass();
    drawWater();
    drawRoad();
    drawHome();
}

function drawGrass() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#13691d";
    ctx.fillRect(0,0,650,850);
}

function drawRoad() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#605f5f";
    ctx.fillRect(0,550,window.innerWidth,250);
    drawDashed();
}
function drawWater() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#a5c5ff";
    ctx.fillRect(0,150,window.innerWidth,350);
}
function drawHome() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle= "#3bdb13";
    ctx.fillRect(0,150,window.innerWidth,25);
    ctx.fillRect(0,175,50,75);
    ctx.fillRect(120,175,50,75);
    ctx.fillRect(240,175,50,75);
    ctx.fillRect(360,175,50,75);
    ctx.fillRect(480,175,50,75);
    ctx.fillRect(600,175,50,75);
}

function drawDashed() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#FFFFFF";
    ctx.setLineDash([10, 20]);
    ctx.moveTo(0, 750);
    ctx.lineTo(650, 750);
    ctx.moveTo(0, 700);
    ctx.lineTo(650, 700);
    ctx.moveTo(0, 650);
    ctx.lineTo(650, 650);
    ctx.moveTo(0, 600);
    ctx.lineTo(650, 600);
    ctx.stroke();
}

function initialize(){
    drawBackground();
    var ctx = document.getElementById("canvas").getContext("2d");

    frogger = createImage(frog.src,300,805,55,45, 0);
    froggerSlot1 = createImage(frog.src,60,-50,55,45, 0);
    froggerSlot2 = createImage(frog.src,177,-50,55,45, 0);
    froggerSlot3 = createImage(frog.src,297,-50,55,45, 0);
    froggerSlot4 = createImage(frog.src,417,-50,55,45, 0);
    froggerSlot5 = createImage(frog.src,537,-50,55,45, 0);
    ctx.drawImage(frogger,frogger.left,frogger.top,frogger.width,frogger.height);
    ctx.drawImage(froggerSlot1,froggerSlot1.left,froggerSlot1.top,froggerSlot1.width,froggerSlot1.height);
    ctx.drawImage(froggerSlot2,froggerSlot2.left,froggerSlot2.top,froggerSlot2.width,froggerSlot2.height);
    ctx.drawImage(froggerSlot3,froggerSlot3.left,froggerSlot3.top,froggerSlot3.width,froggerSlot3.height);
    ctx.drawImage(froggerSlot4,froggerSlot4.left,froggerSlot4.top,froggerSlot4.width,froggerSlot4.height);
    ctx.drawImage(froggerSlot5,froggerSlot5.left,froggerSlot5.top,froggerSlot5.width,froggerSlot5.height);

    lilypads.push(createImage(lilypad.src, 57, 195, 60, 60, 0))
    lilypads.push(createImage(lilypad.src, 175, 195, 60, 60, 0))
    lilypads.push(createImage(lilypad.src, 295, 195, 60, 60, 0))
    lilypads.push(createImage(lilypad.src, 415, 195, 60, 60, 0))
    lilypads.push(createImage(lilypad.src, 535, 195, 60, 60, 0))
    for(i = 0; i < lilypads.length; i++)
    {
        ctx.drawImage(lilypads[i],lilypads[i].left,lilypads[i].top,lilypads[i].width,lilypads[i].height);
    }

    carArray1.push(createImage(car1.src, 600, 750, 50,50, -.8));
    carArray1.push(createImage(car1.src, 100,750,50,50, -.8));
    carArray1.push(createImage(car2.src, 475,700,40,40,.7));
    carArray1.push(createImage(car3.src, 600,650,90,45,-.85));
    carArray1.push(createImage(car3.src,350,650,90,45, -.85));
    carArray1.push(createImage(car4.src,300,600,40,40, .95));
    carArray1.push(createImage(car5.src, 0,550,140,45, .6));
    carArray1.push(createImage(car5.src, 500,550,140,45, .6));

    carArray1.push(createImage(car1.src, 350,750,50,50,-.8));
    carArray1.push(createImage(car2.src,275,700,40,40, .7));
    carArray1.push(createImage(car4.src, 470,600,40,40,.95));

    carArray1.push(createImage(car2.src, 700,700,40,40, .7));
    carArray1.push(createImage(car3.src, 125,650,90,45,-.85));
    carArray1.push(createImage(car4.src, 675,600,40,40, .95));
    for(i = 0; i < levelZero; i++)
    {
        carArray1[i].vis = true;
        ctx.drawImage(carArray1[i],carArray1[i].left,carArray1[i].top,carArray1[i].width,carArray1[i].height);
    }

    logs.push(createImage(log1.src, 600, 450, 50,50, .25))
    logs.push(createImage(log1.src, 450, 450, 50,50, .25))
    logs.push(createImage(log1.src, 300, 450, 50,50, .25))
    logs.push(createImage(log1.src, 0, 450, 50,50, .25))
    logs.push(createImage(log2.src, 0, 410, 145,35, -.75))
    logs.push(createImage(log2.src, 600, 410, 140,35, -.75))
    logs.push(createImage(log1.src, 550, 350, 50,50, .5))
    logs.push(createImage(log1.src, 330, 350, 50,50, .5))
    logs.push(createImage(log1.src, 75, 350, 50,50, .5))
    logs.push(createImage(log2.src, 25, 310, 145,35, -.60))
    logs.push(createImage(log2.src, 450, 310, 140,35, -.60))
    logs.push(createImage(log1.src, 0, 250, 50,50, .65))
    logs.push(createImage(log1.src, 150, 250, 50,50, .65))
    logs.push(createImage(log1.src, 450, 250, 50,50, .65))
    logs.push(createImage(log1.src, 525, 250, 50,50, .65))
    logs.push(createImage(log1.src, 600, 250, 50,50, .65))

    logs.push(createImage(log1.src, 100, 450, 50,50, .25))
    logs.push(createImage(log2.src, 300, 410, 140,35, -.75))
    logs.push(createImage(log1.src, 200, 350, 50,50, .5))
    logs.push(createImage(log2.src, 200, 310, 140,35, -.60))
    logs.push(createImage(log1.src, 250, 250, 50,50, .65))
    for(i = 0; i < logs.length; i++)
    {
        ctx.drawImage(logs[i],logs[i].left,logs[i].top,logs[i].width,logs[i].height);
    }

    hearts.push(createImage(heart.src, 600, 10, 40,35, 0))
    hearts.push(createImage(heart.src, 558, 10, 40,35, 0))
    hearts.push(createImage(heart.src, 516, 10, 40,35, 0))
    for(i = 0; i < hearts.length; i++)
    {
        ctx.drawImage(hearts[i],hearts[i].left,hearts[i].top,hearts[i].width,hearts[i].height);
    }

    snake = createImage(snake.src,300,490,55,55, 1);
    ctx.drawImage(snake,snake.left,snake.top,snake.width,snake.height);

    star = createImage(star.src,200,554,40,40, 0);
    ctx.drawImage(star,star.left,star.top,star.width,star.height);
    starInterval = setInterval(moveStar, 10000);
    snakeInterval = setInterval(snakeGenerateNumber, 500);

    document.getElementById("restartTheGame").disabled = true;

    animate();

}

var createImage = function(src,xco,yco,w,h,s) {
    var img   = new Image();
    img.src   = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.speed = s;
    img.vis= false;
    return img;
}

$(document).keydown(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    //a key to go left
    if(keycode === 65)
    {
        frogger.left -= 30
    }
    //d key to go right
    if(keycode === 68)
    {
        frogger.left += 30
    }
    //w key to go up
    if(keycode === 87)
    {
        frogger.top -= 50
    }
    //s key to go down
    if(keycode === 83)
    {
        frogger.top += 50
    }
    if(keycode === 76)
    {
        gameLevel++;
    }
});

function animate() {
    a=requestAnimationFrame(animate);
    drawBackground();
    drawFroggerLogo();
    drawLilypads();
    createCars();
    moveCars();
    createLogs();
    moveLogs();
    checkFrogBoundaries();
    drawFrog();
    showFrogInSlots();
    checkCollisionWithCar();
    checkCollideWithLog();
    checkCollisionWithWaterAndLog();
    checkCollideWithSnake();
    checkCollisionWithStar();
    showSnake();
    moveSnake();
    showStar();
    drawHearts();
    checkWin();
    displayLevel();
    playerScore();
    displayTopScores();
    nextLevel();
}

function drawFroggerLogo()
{
    var ctx = canvas.getContext("2d");
    ctx.font = 'bold 50px Courier New';
    ctx.fillStyle= "#132e19"
    ctx.fillText("FROGGER", 225, 65);
}

function drawLilypads()
{
    var ctx = document.getElementById("canvas").getContext("2d");

    for(i = 0; i < lilypads.length; i++)
    {
        ctx.drawImage(lilypads[i],lilypads[i].left,lilypads[i].top,lilypads[i].width,lilypads[i].height);
    }
}

function drawFrog(){
    var ctx = document.getElementById("canvas").getContext("2d");
    frogger.left = frogger.left + frogger.speed;
    ctx.drawImage(frogger,frogger.left,frogger.top,frogger.width,frogger.height);
}

function checkFrogBoundaries()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    if (frogger.left <= -60 || frogger.left >= 650 || frogger.top <= 200 || frogger.top >= 810)
    {
        loseALife()
    }
    ctx.drawImage(frogger,frogger.left,frogger.top,frogger.width,frogger.height);
    if (frogger.top <= 455 && frogger.top > 205)
    {
        waterSection = true;
        carSection = false;
    }
    if (frogger.top > 455 || frogger.top === 205)
    {
        waterSection = false;
        carSection = true;
    }
    if (frogger.top === 505)
    {
        frogger.speed = 0;
    }
}

function createCars()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    if (gameLevel === 0)
    {
        for (i = 0; i < levelZero; i++)
        {
            carArray1[i].vis = true;
        }
    }
    if (gameLevel === 1)
    {
        for (i = 0; i < levelOne; i++)
        {
            carArray1[i].vis = true;
        }
    }
    if (gameLevel === 3)
    {
        for (i = 0; i < levelThree; i++)
        {
            carArray1[i].vis = true;
        }
    }
    for (i = 0; i < carArray1.length; i++)
    {
        if (carArray1[i].vis === true)
        {
            ctx.drawImage(carArray1[i],carArray1[i].left,carArray1[i].top,carArray1[i].width,carArray1[i].height);
        }
    }
}

function moveCars()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    for(i = 0; i < carArray1.length; i++)
    {
        carArray1[i].left = carArray1[i].left + carArray1[i].speed;
        if (carArray1[i].left < -140)
        {
            carArray1[i].left = 700;
        }
        if (carArray1[i].left > 700)
        {
            carArray1[i].left = -140;
        }
        if (carArray1[i].vis === true)
        {
            ctx.drawImage(carArray1[i],carArray1[i].left,carArray1[i].top,carArray1[i].width,carArray1[i].height);
        }
    }
}

function checkCollisionWithCar()
{
    for(i = 0; i < carArray1.length; i++)
    {
        checkCollisionParameter(frogger,carArray1[i]);
    }
}

function checkCollideWithLog()
{
    logCollide = false;
    for(i = 0; i < logs.length; i++)
    {
        checkCollisionParameter(frogger,logs[i]);
    }
}

function checkCollisionWithWaterAndLog()
{
    if (waterSection === true && logCollide === false)
    {
        loseALife();
    }
}

function checkCollisionParameter(p1,p2)
{
   if ((p1.left + p1.width > p2.left) && (p1.left < p2.left + p2.width) && (p1.top + p1.height > p2.top) && (p1.top < p2.top + p2.height))
   {
       if (carSection === true && p2 !== star && p2 !== snake && carArray1[i].vis === true)
       {
           loseALife();
       }
       if (waterSection === true && p2 !== snake)
       {
           logCollide = true;
           frogger.speed = logs[i].speed;
       }
       if (frogger.top === 505 && p2 === snake)
       {
           loseALife();
       }
       if (p2 === star)
       {
           if (lives < 3)
           {
               lives ++;
               moveStar();
               drawHearts();
           }
       }
   }
}

function loseALife()
{
    lives -=1;
    livesLost();
    if (lives > 0)
    {
        frogger.left = 300;
        frogger.top = 805;
        frogger.speed = 0;
    }
    drawHearts()
}

function livesLost()
{
    if (lives === 0)
    {
        frogger.left = 300;
        frogger.top = 805;
        frogger.speed = 0;
        playersScores.push(froggersInSlots);
        displayTopScores();
        clearInterval(starInterval)
        clearInterval(snakeInterval);
        var ctx = canvas.getContext("2d");
        ctx.font = 'bold 30px Courier New';
        ctx.fillText("GAME OVER", 243, 100);
        cancelAnimationFrame(a);
        document.getElementById("restartTheGame").disabled = false;
    }
}

function createLogs(){
    var ctx = document.getElementById("canvas").getContext("2d");
    if (gameLevel !==4)
    {
        for(i = 0; i < logs.length; i++)
        {
            ctx.drawImage(logs[i],logs[i].left,logs[i].top,logs[i].width,logs[i].height);
        }
    }
    if (gameLevel === 4)
    {
        for (i = 0; i < 16; i++)
        {
            logs[i].vis = true;
        }
    }
    for (i = 0; i < logs.length; i++)
    {
        if (logs[i].vis === true)
        {
            ctx.drawImage(logs[i],logs[i].left,logs[i].top,logs[i].width,logs[i].height);
        }
    }
}

function moveLogs()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    for(i = 0;i<logs.length;i++)
    {
        logs[i].left = logs[i].left + logs[i].speed;
        if (logs[i].left < -140)
        {
            logs[i].left = 700;
        }
        if (logs[i].left > 700)
        {
            logs[i].left = -90;
        }
        if (logs[i].vis === true)
        {
            ctx.drawImage(logs[i],logs[i].left,logs[i].top,logs[i].width,logs[i].height);
        }
    }
}

function drawHearts()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    for(i = 0; i < lives; i++)
    {
        ctx.drawImage(hearts[i],hearts[i].left,hearts[i].top,hearts[i].width,hearts[i].height);
    }
}

function showFrogInSlots()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    if (frogger.top === 205)
    {
        if (frogger.left > 50 && frogger.left < 65 && frogger.top === 205)
        {
            froggerSlot1.top = 205;
            frogger.left = 300;
            frogger.top = 805;
            froggersInSlots++;
        }
        else if (frogger.left > 170 && frogger.left < 185 && frogger.top === 205)
        {
            froggerSlot2.top = 205;
            frogger.left = 300;
            frogger.top = 805;
            froggersInSlots++;
        }
        else if (frogger.left > 290 && frogger.left < 305 && frogger.top === 205)
        {
            froggerSlot3.top = 205;
            frogger.left = 300;
            frogger.top = 805;
            froggersInSlots++;
        }
        else if (frogger.left > 410 && frogger.left < 425 && frogger.top === 205)
        {
            froggerSlot4.top = 205;
            frogger.left = 300;
            frogger.top = 805;
            froggersInSlots++;
        }
        else if (frogger.left > 530 && frogger.left < 580 && frogger.top === 205)
        {
            froggerSlot5.top = 205;
            frogger.left = 300;
            frogger.top = 805;
            froggersInSlots++;
        }
        else
        {
            loseALife();
        }
        frogger.speed = 0
    }

    ctx.drawImage(frogger,frogger.left,frogger.top,frogger.width,frogger.height);
    ctx.drawImage(froggerSlot1,froggerSlot1.left,froggerSlot1.top,froggerSlot1.width,froggerSlot1.height);
    ctx.drawImage(froggerSlot2,froggerSlot2.left,froggerSlot2.top,froggerSlot2.width,froggerSlot2.height);
    ctx.drawImage(froggerSlot3,froggerSlot3.left,froggerSlot3.top,froggerSlot3.width,froggerSlot3.height);
    ctx.drawImage(froggerSlot4,froggerSlot4.left,froggerSlot4.top,froggerSlot4.width,froggerSlot4.height);
    ctx.drawImage(froggerSlot5,froggerSlot5.left,froggerSlot5.top,froggerSlot5.width,froggerSlot5.height);
}

function showSnake()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(snake,snake.left,snake.top,snake.width,snake.height);
}

function snakeGenerateNumber()
{
   snakeLorR = getRandomInt(0, 2)
}

function moveSnake()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    if (snakeLorR === 0)
    {
        snake.left = snake.left - .5
    }
    if (snakeLorR === 1)
    {
        snake.left = snake.left + .5
    }
    if (snake.left < -50)
    {
        snake.left = 700;
    }
    if (snake.left > 700)
    {
        snake.left = -50;
    }
    ctx.drawImage(snake,snake.left,snake.top,snake.width,snake.height);
}

function checkCollideWithSnake()
{
    checkCollisionParameter(frogger,snake);
}

function showStar()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(star,star.left,star.top,star.width,star.height);
}

function moveStar()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    star.left = getRandomInt(50, 600);
    star.top = getRandomInt(540, 800);
    ctx.drawImage(star,star.left,star.top,star.width,star.height);

}

function checkCollisionWithStar()
{
    checkCollisionParameter(frogger,star);
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

function restartGame()
{
    var ctx = document.getElementById("canvas").getContext("2d");
    lives = 3;
    gameLevel = 0;
    frogger.speed = 0;
    frogger.top = 805;
    frogger.left = 300;
    froggersInSlots = 0;
    froggerSlot1.top = -50;
    froggerSlot2.top = -50;
    froggerSlot3.top = -50;
    froggerSlot4.top = -50;
    froggerSlot5.top = -50;
    for (i = 0; i < carArray1.length; i++)
    {
        carArray1[i].vis = false;
    }
    originalSpeeds();
    a = requestAnimationFrame(animate);
    document.getElementById("restartTheGame").disabled = true;

    ctx.drawImage(frogger,frogger.left,frogger.top,frogger.width,frogger.height);
    ctx.drawImage(froggerSlot1,froggerSlot1.left,froggerSlot1.top,froggerSlot1.width,froggerSlot1.height);
    ctx.drawImage(froggerSlot2,froggerSlot2.left,froggerSlot2.top,froggerSlot2.width,froggerSlot2.height);
    ctx.drawImage(froggerSlot3,froggerSlot3.left,froggerSlot3.top,froggerSlot3.width,froggerSlot3.height);
    ctx.drawImage(froggerSlot4,froggerSlot4.left,froggerSlot4.top,froggerSlot4.width,froggerSlot4.height);
    ctx.drawImage(froggerSlot5,froggerSlot5.left,froggerSlot5.top,froggerSlot5.width,froggerSlot5.height);
}

function checkWin()
{
    if (froggersInSlots === 5)
    {
        cancelAnimationFrame(a);
        clearInterval(starInterval);
        clearInterval(snakeInterval);
        playersScores.push(froggersInSlots);
        var ctx = canvas.getContext("2d");
        ctx.font = 'bold 30px Courier New';
        ctx.fillText("YOU WIN!", 260, 100);
        document.getElementById("restartTheGame").disabled = false;
    }
}

function playerScore()
{
    var ctx = canvas.getContext("2d");
    ctx.font = '25px Courier New';
    ctx.fillStyle= "#ffffff"
    ctx.fillText("PLAYER SCORE: " + froggersInSlots, 10, 115);
}

function displayTopScores()
{
    var ctx = canvas.getContext("2d");
    ctx.font = '20px Courier New';
    ctx.fillText("TOP SCORE: " + Math.max(...playersScores), 10, 140);
}

function displayLevel()
{
    var ctx = canvas.getContext("2d");
    ctx.font = '25px Courier New';
    ctx.fillStyle= "#ffffff"
    ctx.fillText("LEVEL: " + (gameLevel + 1), 510, 135);
}

function nextLevel()
{
    if (froggersInSlots === 0)
    {
        gameLevel = 0;
    }
    if (froggersInSlots === 1)
    {
        gameLevel = 1;
    }
    if (froggersInSlots === 2)
    {
        for (i = 0; i < carArray1.length; i++)
        {
            if (carArray1[i].src === car1.src)
            {
                carArray1[i].speed = -1
            }
            if (carArray1[i].src === car2.src)
            {
                carArray1[i].speed = 0.8
            }
            if (carArray1[i].src === car3.src)
            {
                carArray1[i].speed = -0.95
            }
            if (carArray1[i].src === car4.src)
            {
                carArray1[i].speed = 1.5
            }
            if (carArray1[i].src === car5.src)
            {
                carArray1[i].speed = 0.85
            }
        }
    }
    if (froggersInSlots === 3)
    {
        gameLevel = 3;
        for (i = 0; i < carArray1.length; i++)
        {
            if (carArray1[i].src === car1.src)
            {
                carArray1[i].speed = -1
            }
            if (carArray1[i].src === car2.src)
            {
                carArray1[i].speed = 0.8
            }
            if (carArray1[i].src === car3.src)
            {
                carArray1[i].speed = -0.95
            }
            if (carArray1[i].src === car4.src)
            {
                carArray1[i].speed = 1.5
            }
            if (carArray1[i].src === car5.src)
            {
                carArray1[i].speed = 0.85
            }
        }
    }
    if (froggersInSlots === 4)
    {
        gameLevel = 4;
        for (i = 0; i < carArray1.length; i++)
        {
            if (carArray1[i].src === car1.src)
            {
                carArray1[i].speed = -2
            }
            if (carArray1[i].src === car2.src)
            {
                carArray1[i].speed = 1
            }
            if (carArray1[i].src === car3.src)
            {
                carArray1[i].speed = -1.25
            }
            if (carArray1[i].src === car4.src)
            {
                carArray1[i].speed = 2.25
            }
            if (carArray1[i].src === car5.src)
            {
                carArray1[i].speed = 0.9
            }
        }
    }
    if (gameLevel >= 1)
    {
        for (i = 0; i < logs.length; i++)
        {
            if (logs[i].top === 450)
            {
                logs[i].speed = 0.5
            }
            if (logs[i].top === 410)
            {
                logs[i].speed = -1.5
            }
            if (logs[i].top === 350)
            {
                logs[i].speed = 0.7
            }
            if (logs[i].top === 310)
            {
                logs[i].speed = -0.8
            }
            if (logs[i].top === 250)
            {
                logs[i].speed = 0.7
            }
        }
    }
}

function originalSpeeds()
{
    for (i = 0; i < carArray1.length; i++)
    {
        if (carArray1[i].src === car1.src)
        {
            carArray1[i].speed = -0.8
        }
        if (carArray1[i].src === car2.src)
        {
            carArray1[i].speed = 0.7
        }
        if (carArray1[i].src === car3.src)
        {
            carArray1[i].speed = -0.85
        }
        if (carArray1[i].src === car4.src)
        {
            carArray1[i].speed = 0.95
        }
        if (carArray1[i].src === car5.src)
        {
            carArray1[i].speed = 0.6
        }
    }
    for (i = 0; i < logs.length; i++)
    {
        if (logs[i].top === 450)
        {
            logs[i].speed = 0.25
        }
        if (logs[i].top === 410)
        {
            logs[i].speed = -0.75
        }
        if (logs[i].top === 350)
        {
            logs[i].speed = 0.5
        }
        if (logs[i].top === 310)
        {
            logs[i].speed = -0.6
        }
        if (logs[i].top === 250)
        {
            logs[i].speed = 0.65
        }
    }
}

function showInstructions()
{
    document.getElementById("instructionsList").style.color = "#ffffff"
    document.getElementById("instructionsList").style.fontSize = "x-large";
    document.getElementById("instructionsList").innerHTML = "Movement is WASD keys!" + "<br>" +
        "The goal of the game is to get the frog into its five homes at the top of the screen." + "<br>" +
        "Avoid the cars, snake and water, while using the logs as transportation."  + "<br>" +
        "Stars will give you one more life, but you cannot have more than three!"  + "<br>" +
        "Levels will increase everytime a frog gets in one of its homes...beware..."  + "<br>" +
        "Have fun!"
    document.getElementById("noInstructions").style.visibility = "visible";
}

function closeInstructions()
{
    document.getElementById("instructionsList").innerHTML = ""
    document.getElementById("noInstructions").style.visibility = "hidden";
}
