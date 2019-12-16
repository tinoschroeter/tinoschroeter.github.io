---
layout: default
title: 16 Games
nav_order: 6
---

# Games
{: .no_toc }

## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Pong
{: .d-inline-block }

https://de.wikipedia.org/wiki/Pong

<iframe style="width: 600px; height: 400px; overflow: hidden;"  scrolling="no" frameborder="0" src="https://editor.p5js.org/tinoschroeter/embed/6b9puby6S"></iframe>

[Code editieren](https://editor.p5js.org/tinoschroeter/sketches/6b9puby6S){: .btn .btn-purple .mr-2 }

```javascript
let ball;
let paddel;

function setup() {
  createCanvas(600, 400);
  ball = new Ball();
  paddel = new Paddel();
}

function draw() {
  background(0);
  ball.move();
  ball.hit(paddel);
  ball.edge();
  ball.show();

  if (keyIsDown(LEFT_ARROW)) {
    paddel.move(-6);
  } else if (keyIsDown(RIGHT_ARROW)) {
    paddel.move(6);
  }
  paddel.show();
}

function Ball() {
  this.x = width / 2;
  this.y = height / 2;
  this.r = 15;
  this.dirx = -4;
  this.diry = -4;

  this.move = function() {
    this.x += this.dirx;
    this.y += this.diry;
  }

  this.edge = function() {
    if (this.x < 0 || this.x > width) {
      this.dirx = -this.dirx;
    } else if (this.y < 0) {
      this.diry = -this.diry;
    } else if (this.y > height) {
      textSize(32);
      text('ENDE', width / 2 - 20, height / 2);
      noLoop();
    }
  }

  this.hit = function(paddel) {
    this.hitx = (this.x > paddel.x && this.x < paddel.x + paddel.w);
    this.hity = (this.y < height && this.y > height - (paddel.h + this.r));

    if (this.hitx && this.hity) {
      this.diry = -this.diry;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

function Paddel() {
  this.h = 10;
  this.w = 90;
  this.x = width / 2 - this.w / 2;
  this.y = height - this.h * 2;

  this.move = function(x) {
    this.x = constrain(this.x, 0, width - this.w);
    this.x += x;
  }

  this.show = function() {
    fill(255);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}

```

## Snake

https://de.wikipedia.org/wiki/Snake_(Computerspiel)

## Tic Tac Toe

https://de.wikipedia.org/wiki/Tic-Tac-Toe

## Chrome Dinosaur Game
{: .d-inline-block }

das ist eine sehr einfache Version vom Chrome Dinosaur Game.
Um die Kollision zu erkennen benutze ich p5.collide2D.


<iframe style="width: 600px; height: 400px; overflow: hidden;"  scrolling="no" frameborder="0" src="https://editor.p5js.org/tinoschroeter/embed/5xl6mbu1E"></iframe>

[Code editieren](https://editor.p5js.org/tinoschroeter/sketches/5xl6mbu1E){: .btn .btn-purple .mr-2 }

```javascript
let dinosaur;
let cactus;

function setup() {
  createCanvas(600, 400);
  dinosaur = new Dinosaur();
  cactus = new Cactus();
}

function draw() {
  background(255);
  if (frameCount % 200 === 0) {
    cactus = new Cactus();
  }
  dinosaur.move();
  dinosaur.show();

  if (cactus.hit(dinosaur)) {
    fill(0);
    text('getroffen!!', width/2, 50);
    console.log('hit');
  }
  cactus.move();
  cactus.show();
}

function keyPressed() {
  if (key == ' ') {
    dinosaur.jump();
  }
}

function Dinosaur() {
  this.x = 50;
  this.y = height - 50;
  this.yv = 0;
  this.gravity = 2;
  this.size = 50;

  this.jump = function() {

    if (this.yv < -this.size) {
      this.yv = 32;
    }
  }

  this.move = function() {
    this.y -= this.yv;
    this.yv -= 2;
    this.y = constrain(this.y, 0, height - this.size);
  }

  this.show = function() {
    noFill();
    rect(this.x, this.y, this.size, this.size);
  }
}

function Cactus() {
  this.x = width;
  this.y = height - 60;
  this.size = 60;

  this.move = function() {
    this.x -= 6;
  }

  this.hit = function(dinosaur) {
    return collideRectRect(this.x, this.y, this.size, this.size, dinosaur.x, dinosaur.y, dinosaur.size, dinosaur.size);
  }

  this.show = function() {
    rect(this.x, this.y, this.size, this.size);
  }
}
```

## Angry Birds

## flappy bird

## frogger

## Game of Life

## Minesweeper

## Asteroids game

## Space Invaders
