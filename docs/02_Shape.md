---
layout: default
title: 02 Shape
nav_order: 6
---

# Shape
{: .no_toc }

## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Heissluftballon
{: .d-inline-block }

<iframe style="width: 600px; height: 400px; overflow: hidden;"  scrolling="no" frameborder="0" src="https://editor.p5js.org/tinoschroeter/embed/yHKE5WEmo"></iframe>

[Code editieren](https://editor.p5js.org/tinoschroeter/sketches/yHKE5WEmo){: .btn .btn-purple .mr-2 }

```javascript
let shape = [];

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  for (let i = 0; i < 40; i++) {
    shape.push(new Shape());
  }
}

function draw() {
  background(255);
  for (let i = 0; i < 5; i++) {
    shape[i].move();
    shape[i].reset();
    shape[i].show();
  }
}

function Shape(x) {
  this.x = random(0, width);
  this.y = height + random(50, height);
  this.size = random(60, 90);
  this.color = color(random(0, 255), random(0, 255), random(0, 255))

  this.move = function() {
    this.y -= random(1, 4);
  }

  this.reset = function() {
    if (this.y + this.size < 0) {
      this.y = height + random(5, 200);
    }
  }

  this.show = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
    fill(0);
    stroke(0);
    line(this.x, this.y + this.size / 2, this.x, this.y + this.size * 1.3);
    noStroke();
    fill(168, 142, 82);
    rect(this.x, this.y + this.size * 1.3, 40, 20);
  }
}
```
