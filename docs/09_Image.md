---
layout: default
title: 09 Image
nav_order: 6
---

# Image
{: .no_toc }

## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Bouncing DVD Logo


<iframe style="width: 600px; height: 400px; overflow: hidden;"  scrolling="no" frameborder="0" src="https://editor.p5js.org/tinoschroeter/embed/Dgc3bI8d_"></iframe>

[Code editieren](https://editor.p5js.org/tinoschroeter/sketches/Dgc3bI8d_){: .btn .btn-purple .mr-2 }


```javascript
let dvd;

function preload() {
  img = loadImage('dvd.jpeg');
}

function setup() {
  createCanvas(600, 400);
  dvd = new Dvd();
}

function draw() {
  background(0);
  dvd.move();
  dvd.edge();
  dvd.show();
  
  //console.log(img.height);
  //console.log(img.width);
}

function Dvd() {
  this.x = width/2;
  this.y = height/2;
  this.r = 30;
  this.dirx = 4;
  this.diry = 4;
  
  this.move = function() {
    this.x += this.dirx;
    this.y += this.diry;
  }
  
  this.edge = function() {
    if(this.x < 0 || this.x  > width - 100) {
      this.dirx = -this.dirx;
    } else if(this.y < 0 || this.y > height - 100) {
      this.diry = -this.diry;
    }
  }
  
  this.show = function() {
    fill(255);
    image(img, this.x, this.y, 100, 100);
  }
}
```
