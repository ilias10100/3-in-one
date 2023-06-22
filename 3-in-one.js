document.getElementById('convert1').onclick = function() {
  
let MAD = document.getElementById('morocco').value;


  if(MAD<0) {
  alert('YOU HAVE NO MONEY !!!!');
  MAD = 0;
  document.getElementById('USD').innerHTML = MAD ;
  document.getElementById('morocco').value = MAD ;
}

MAD = MAD/10 

document.getElementById('USD').innerHTML = MAD + 'USD' ;
}



document.getElementById('convert2').onclick = function() {

let USD = document.getElementById('usa').value;

if(USD<0) {
  alert('YOU HAVE NO MONEY !!!!');
  USD = 0;
  document.getElementById('USD').innerHTML = USD ;
  document.getElementById('usa').value = USD ;
}

USD = USD*10 ;


document.getElementById('MAD').innerHTML = USD + 'MAD' ;
}


let decrease = 0;
let reset = 0;
let increase = 0;
let Number = 0;

document.getElementById('decrease1').onclick = function () {
Number -=1 ;
decrease = document.getElementById('Number1').innerHTML = Number 
}

document.getElementById('reset1').onclick = function () {
Number = 0 ;
decrease = document.getElementById('Number1').innerHTML = Number 
}

document.getElementById('increase1').onclick = function () {
Number +=1 ;
decrease = document.getElementById('Number1').innerHTML = Number 
}



let a;
let b;
let c;    

document.getElementById('click').onclick = function() {
  a = document.getElementById('input1').value;
  b = document.getElementById('input2').value;
  c =  Math.sqrt(Math.pow(a , 2)+ Math.pow(b , 2));
document.getElementById('ktaba').innerHTML = 'side c :' + c
}
