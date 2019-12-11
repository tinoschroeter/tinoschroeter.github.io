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
