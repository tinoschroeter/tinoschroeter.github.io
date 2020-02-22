let ball = new Ball();

function Ball() {
  this.x = 50;
  this.y = 80;

  this.move = function() {
        this.x = this.x + 10
    }
}

ball.move();
