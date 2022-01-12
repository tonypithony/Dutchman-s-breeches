let y = x => 0.05*x**3+0.1*x**2; // функция
let z = 50; // масштаб
let c = document.querySelector('canvas');
let ctx = c.getContext('2d');

// центровочка
ctx.translate(c.width/2, c.height/2)
   
// сетка
ctx.beginPath();

for (let x = -10; x <10; x++) {
  ctx.moveTo(x*z, -c.height/2);
  ctx.lineTo(x*z, c.height/2);
  ctx.moveTo(-c.width/2, x*z);
  ctx.lineTo(c.width/2, x*z);
}
ctx.stroke();

// график функции
ctx.strokeStyle = "orange";
ctx.lineWidth = 3;
ctx.beginPath();
for (let i = -10; i <= 10; i += 0.1) {
  ctx[i?'lineTo':'moveTo'](i*z, -y(i)*z);
} 

ctx.stroke();