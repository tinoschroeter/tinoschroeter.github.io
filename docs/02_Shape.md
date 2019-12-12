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


## Schnee 
{: .d-inline-block }


<iframe style="width: 600px; height: 400px; overflow: hidden;"  scrolling="no" frameborder="0" src="https://editor.p5js.org/tinoschroeter/embed/ibPxieiIr"></iframe>                                                                                                  

[Code editieren](https://editor.p5js.org/tinoschroeter/sketches/ibPxieiIr){: .btn .btn-purple .mr-2 }

```javascript
let snow = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 100; i++) {
    snow.push(new Snow());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < snow.length; i++) {
    snow[i].move();
    snow[i].reset();
    snow[i].show();
  }
}

function Snow() {
  this.x = random(-50, width + 50);
  this.y = random(-height * 2, -height);
  this.d = random(2, 9);

  this.move = function() {
    this.y += this.d * 0.8;
  }

  this.reset = function() {
    if (this.y > height) {
      this.y = random(-height * 2, height);
    }
  }

  this.show = function() {
    fill(255);
    noStroke();
    circle(this.x, this.y, this.d);
  }
}
```

## 10PRINT
{: .d-inline-block }

<iframe style="width: 600px; height: 400px; overflow: hidden;"  scrolling="no" frameborder="0" src="https://editor.p5js.org/tinoschroeter/embed/owH2hgheA"></iframe>

[Code editieren](https://editor.p5js.org/tinoschroeter/sketches/owH2hgheA){: .btn .btn-purple .mr-2 }

```javascript
let d = 20;
let filling;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (frameCount % 60 === 0) {
    background(255);
    for (let x = d; x < width; x += d * 2) {
      for (let y = d; y < height; y += d * 2) {
        filling = floor(random(0, 2))
        if (filling > 0) {
          fill(0);
        } else {
          noFill();
        }
        circle(x, y, d);
      }
    }
  }
}
```
