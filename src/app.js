const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 768;

const CollisionsMap = [];

for (let i = 0; i <= Collisions.length; i+=70) {
  CollisionsMap.push(Collisions.slice(i,70+i));
}
console.log(CollisionsMap);

//--- images ---//
const img = new Image();
img.src = './assets/images/Pellet Town.png';

const playerImage = new Image();
playerImage.src = './assets/images/playerDown.png';
//----------------//


//--- classes ---//
class Sprite {
  constructor({position, img}) {
    this.position = position;
    this.img = img;
  }

  draw() {
    ctx.drawImage(this.img, this.position.x, this.position.y);
  }
}

//--- instances ---//

const background = new Sprite({
  position: {
    x: -785, 
    y: -650,
  },
  img: img,
});

const keys = {
  w: { pressed: false},
  s: { pressed: false},
  a: { pressed: false},
  d: { pressed: false},
};


function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  ctx.drawImage(
    playerImage,  
    // --- crop --- //
    0, 
    0,
    playerImage.width /4,
    playerImage.height,

    // --- draw --- //
    canvas.width / 2 - (playerImage.width / 4)/2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );

  if (keys.w.pressed && lastKey === 'w') {
    background.position.y += 3;
  } else if (keys.s.pressed && lastKey === 's') {
    background.position.y -= 3;
  } else if (keys.a.pressed && lastKey === 'a') {
    background.position.x += 3;
  } else if (keys.d.pressed && lastKey === 'd') {
    background.position.x -= 3;
  }

}

animate();

let lastKey = ''; // to avoid multiple key presses

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = true;
      lastKey = 'w';
      break;
    case 's':
      keys.s.pressed = true;
      lastKey = 's';
      break;
    case 'a':
      keys.a.pressed = true;
      lastKey = 'a';
      break;
    case 'd':
      keys.d.pressed = true;
      lastKey = 'd';
  }
});

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false;
      break;
    case 's':
      keys.s.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
  }
});
