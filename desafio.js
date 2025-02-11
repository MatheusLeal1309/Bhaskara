let a = 2;
let b = -8;
let c = 6;

let delta = (-b)**2 - 4*a*c;

let raizQuadrada = Math.sqrt(delta);
let x1 = (-(b) + raizQuadrada) / (2 * a);
let x2 = (-(b) - raizQuadrada) / (2 * a);

console.log(delta);
console.log(x1);
console.log(x2);