const canvas = document.querySelector('canvas')
const worldImg = new Image()
worldImg.src = `./images/bezos-background.jpg`

// canvas.width = window.innerWidth;
// canvas.height = canvas.width * worldImg.height / worldImg.width
canvas.width = window.innerWidth;
canvas.height = 540
// console.log(canvas.height)
const ctx = canvas.getContext('2d')




let world = {
  x: 0,
  y: 0,
  w: canvas.width,
  h: canvas.height
}

worldImg.onload = function () {
  ctx.drawImage(worldImg, world.x, world.y, world.w, world.h)
}


const BezosImg = new Image()
BezosImg.src = `./images/bezos-bot-v2.png`

class bot {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

let Bezos = new bot(0, 340, 250, 175)

window.onkeydown = function (event) {
  switch (event.key) {
    case 'ArrowLeft':
      Bezos.x -= 15
      break;
    case 'ArrowRight':
      Bezos.x += 15
      break;
  }
}


// health bar 

class progressBar {
  constructor(element, initialValue = 0) {
    this.valueElem = elements.querySelector('.progress-bar-value');
    this.fillElem = elements.querySelector('.progress-bar-fill');

    this.setValue(initialValue);
  }

  setValue(newValue) {
    if (newValue < 0) {
      newValue = 0;
    }
    if (newValue > 100) {
      newValue = 100;
    }
    this.value = newValue;
    this.update();

  }

  update() {
    const percentage = this.value + '%';

    this.fillElem.style.width = percentage;
    this.valueElem.textContent = percentage;
  }

}
//  for some reason the code below breaks the bezos character
// new progressBar(document.querySelector('.progress-bar')75);




animationId = null;

function animate() {
  animationId = requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(worldImg, world.x, world.y, world.w, world.h)
  ctx.drawImage(BezosImg, Bezos.x, Bezos.y, Bezos.w, Bezos.h)

}
animate()



