const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 768;

ctx.fillStyle = 'whites';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const img = new Image();
img.src = './assets/images/Pellet Town.png';

const playerImage = new Image();
playerImage.src = './assets/images/playerDown.png';


img.onload = () => {
  ctx.drawImage(img, -780, -650);
  ctx.drawImage(
    playerImage,  
    0, 
    0,
    playerImage.width /4,
    playerImage.height,
    canvas.width / 2 - (playerImage.width / 4) /2,
    canvas.height / 2 - (playerImage.height / 2),
    playerImage.width / 4,
    playerImage.height
  );
};

