---
layout: default
title: 01 Color
nav_order: 6
---

# Color
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## bunte Baelle
{: .d-inline-block }

<iframe style="width: 600px; height: 400px; overflow: hidden;"  scrolling="no" frameborder="0" src="https://editor.p5js.org/tinoschroeter/embed/kLrV219z-"></iframe>

[Code editieren](https://editor.p5js.org/tinoschroeter/sketches/kLrV219z-){: .btn .btn-purple .mr-2 }

```javascript
let ball = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 120; i++) {
    ball.push(new Ball());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < ball.length; i++) {
    ball[i].show();
    ball[i].edge();
    ball[i].move();
  }
}

function Ball() {
  this.r = random(50, 255);
  this.g = random(50, 255);
  this.b = random(50, 255);

  this.d = random(30, 80);

  this.x = random(0, width);
  this.y = random(0, height);

  this.dx = random(-5, 5);
  this.dy = random(-5, 5);

  this.move = function() {
    this.x += this.dx;
    this.y += this.dy;
  }

  this.edge = function() {
    if (this.x < 0 || this.x > width) {
      this.dx = -this.dx;
    } else if (this.y < 0 || this.y > height) {
      this.dy = -this.dy;
    }
  }

  this.show = function() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.d / 2);
  }
}
```
