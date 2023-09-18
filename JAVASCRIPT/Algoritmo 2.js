/*
1) function a() {
2)    console.log('hello');
3) }
4) console.log('Dojo'); Dojo

*/

/*
1) function a(){
2)   console.log('hello'); hello
3)   return 15;
4) }
5) x = a();
6) console.log('x is', x); 15
*/

/*
1) function a(n){
2)   console.log('n is', n); 
3)   return n+15;
4) }
5) x = a(3);
6) console.log('x is', x); 18
*/

/*
1) function a(n) {
2)   console.log('n is', n);
3)   y = n*2;
4)   return y;
5) }
6) x = a(3) + a(5);
7) console.log('x is', x); 16
*/

/*
1) function op(a,b) {
2)   c = a+b;
3)   console.log('c is', c);
4)   return c;
5) }
6) x = op(2,3) + op(3,5);
7) console.log('x is', x); 13
*/

/*
1) function op(a,b) {
2)   c = a+b;
3)   console.log('c is', c);
4)   return c;
5) }
6) x = op(2,3) + op(3,op(2,1)) + op(op(2,1), op(2,3));
7) console.log('x is', x) 19
*/

/*
1) var x = 15;
2) function a() {
3)   var x = 10;
4) }
5) console.log(x);15
6) a();
7) console.log(x);15
*/

/*
function multiply(x,y) {
console.log(x); 2
console.log(y); 3
}
b = multiply(2,3);
console.log(b);
*/

/*
function multiply(x,y) {
return x*y;
}
b = multiply(2,3);
console.log(b); 6
console.log(multiply(5,2)); 15
*/

/*
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
i = i + 3; 
console.log(i); 3, 7
}
*/

/*
var x=15;
console.log(x); 15
function awesome(){
var x=10;
console.log(x);10
}
console.log(x); 15
awesome();
console.log(x); 15
*/

/*
for(var i=0; i<15; i+=2) {
console.log(i); 0,2,4,6,8,10,12,14
}
*/

/* 
for(var i=0; i<3; i++) {
for(var j=0; j<2; j++) {    
    console.log(i*j); 0,0,0,1,,0,2
}
}*/

/*
function looping(x,y) {
for(var i=0; i<x; i++) {
    for(var j=0; j<x; j++) { 
    console.log(i*j); 0,0,0,0,1,2,0,2,4
    } 
}
}
z = looping(3,3);
console.log(z);
*/

/*
function looping(x,y) {
for(var i=0; i<x; i++) {
    for(var j=0; j<y; j++) {  
    console.log(i*j); 0,0,0,0,0,0,1,2,3,4,2,4,6,8
    } 
}
return x*y;
}
z = looping(3,5);
console.log(z);
*/
