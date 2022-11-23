// 변수에 값을 대입,할당
var x;
let y;
x=5;
y=6;
let z=x+y;
console.log(z)

// 숫자는 소수점을 포함하거나 포함하지않을수있다
$("demo").ready(function(){
    console.log(10.50)
});
//큰따옴표,작은따옴표 = 문자열
$("demo").ready(function(){
    console.log("John Doe")
});
//변수에 값을 대입,할당
let i;
i = 6;
$("demo").ready(function(){
    console.log(i)
});
//연산자
$("demo").ready(function(){
    console.log((5+6)*10)
});
//연산자
k=5;
l=6;
$("demo").ready(function(){
    console.log(k+l)
});
//연산자
$("demo").ready(function(){
    console.log(5*10)
});
//연산자
j=5
$("demo").ready(function(){
    console.log(j*10)
});
//문자열 +
$("demo").ready(function(){
    console.log("John"+""+"Doe")
});
//let 키워드사용
let h,g;
h=5+6;
g=h*10;
$("demo").ready(function(){
    console.log(g)
});
//var 키워드사용
var f,d;
f=5+6;
d=f*10;
$("demo").ready(function(){
    console.log(d)
});
//주석사용
let s;
s=5;
// x = 6; I will not be executed
$("demo").ready(function(){
    console.log(s)
});
//변수 대소문자 구분
let lastname,lastName;
lastName="Doe";
lastname="Peterson";
$("demo").ready(function(){
    console.log(lastName)
});
//변수사용
var a=5;
var v=6;
var c=a+v;
$("demo").ready(function(){
    console.log("The value of z is:"+c)
});
//변수사용
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
$("demo").ready(function(){
    console.log("The total is: " + total)
});
//따옴표를쓰면 문자열로 변한다
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
$("demo").ready(function(){
    console.log(pi+"<br>"+person+"<br>"+answer)
});
//변수할당후 출력
var carName="volvo";
$("demo").ready(function(){
    console.log(carName)
});

//하나의 명령문에 많은변수선언
var person = "John Doe", 
carName = "Volvo", 
price = 200;
$("demo").ready(function(){
    console.log(carName)
});
//값 없이 선언된 변수==undefined
var carname;
$("demo").ready(function(){
    console.log(carname)
});
//변수 재선언
var carNAme = "Volvo";
var carNAme;
$("demo").ready(function(){
    console.log(carNAme)
});
//문자열 연결
var X = "John"+" "+"Doe";
$("demo").ready(function(){
    console.log(X)
});
//산술
var T=5+2+3;
$("demo").ready(function(){
    console.log(T)
});
//숫자를 따옴표로 묶으면 문자열이된다
var P = "5" + 2 + 3;
$("demo").ready(function(){
    console.log(P)
});
var O = 2 + 3 + "5";
$("demo").ready(function(){
    console.log(O)
});
// 언더바를 변수로사용
var _1 = 2;
var _100 = 5;
$("demo").ready(function(){
    console.log(_1+_100)
})
//var 재선언
//var와 let의 차이점은 let은 먼저쓴게 동작하고
//var는 재선언하면 후에쓴게 동작한다
var I = 10;
var I = 2;
$("demo").ready(function(){
    console.log(I)
});
//const는 재선언할수없다
//const는 변수를 선언할때 값을 할당해야한다.
try{
    const PI = 3.141592653589793;
    PI = 3.14;
}
catch(err){
    $("demo").ready(function(){
        console.log(err)
    });
}
//const는 값 재할당,배열 재할당,개체 재할당은 불가능하고
//상수 배열의 요소 변경,상수 객체의 속성변경은 가능하다.
const cars = ["Saab", "VOLvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
$("demo").ready(function(){
    console.log(cars)
});
try{
    const cars = ["saab","volVo","bmw"];
    cars = ["Toyota", "volVo", "Audi"];
}
catch (err) {
    $("demo").ready(function(){
        console.log(err)
    });
}
try {
    const car = {
    type:"Fiat", 
    model:"500", 
    color:"white"};
    car = {
    type:"Volvo", 
    model:"EX60", 
    color:"red"};
}
  catch (err) {
    $("demo").ready(function(){
        console.log(err)
    });
}
//블록안에서 선언된 변수는 밖에있는변수랑 동일하지않다.
const E = 10;{
    const E = 2;
}
$("demo").ready(function(){
    console.log(E)
});
//var는 선언하기전에 변수를 사용할 수 있습니다.
CaRname = "VOLVO"
$("demo").ready(function(){
    console.log(CaRname)
});
var CaRname;
//const는 선언하기전에 변수를 사용할수없다.
try{
    alert(CARNAME);
    const CARNAME = "bmw"
}
catch(err){
    $("demo").ready(function(){
        console.log(err)
    });
}
//연산자
let e1=5,
e2=2,
e3=e1+e2;
$("demo").ready(function(){
    console.log(e3)
});
let e4=10;
$("demo").ready(function(){
    console.log(e4)
});
let q1=5,
q2=2,
q3=q1*q2;
$("demo").ready(function(){
    console.log(q3)
});
//산술연산자
var w1 = 10;
w1 += 5;
$("demo").ready(function(){
    console.log(w1)
});
//문자열연산자
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
$("demo").ready(function(){
    console.log(text3)
});
let text_1 = "What a very ";
text_1 += "nice day";
$("demo").ready(function(){
    console.log(text_1)
});
let r1 = 5 + 5;
let r2 = "5" + 5;
let r3 = "Hello" + 5;
$("demo").ready(function(){
    console.log(r1+"<br>"+r2+"<br>"+r3)
});
//산술
let t1 = 100+50;
$("demo").ready(function(){
    console.log(t1)
});
let t2=100,
t3=50,
t4=t2+t3;
$("demo").ready(function(){
    console.log(t4)
});
y1=3,y2=(100+50)*y1;
$("demo").ready(function(){
    console.log(y2)
});
let u1=5,
u2=2,
u3=u1+u2;
$("demo").ready(function(){
    console.log(u3)
});
let i1=5,
i2=2,
i3=i1-i2;
$("demo").ready(function(){
    console.log(i3)
});
let o1=5,
o2=2,
o3=o1*o2;
$("demo").ready(function(){
    console.log(o3)
});
let p1=5,
p2=2,
p3=p1/p2;
$("demo").ready(function(){
    console.log(p3)
});
let a1=5,
a2=2,
a3=a1%a2;
$("demo").ready(function(){
    console.log(a3)
});
let s1 = 5;
s1++;
let s2 = s1;
$(function(){
    console.log(s2)
});
let d1 = 5;
d1--;
let d2 = d1;
$(function(){
    console.log(d2)
});
let f1 = 5;
$(function(){
    console.log(f1**2)
});
//Math.pow()=괄호안 왼쪽값을 오른쪽값만큼 제곱하는것이다.
let g1 = 5;
$(function(){
    console.log(Math.pow(g1,2))
});
$(function(){
    console.log(100+50*3)
});
$(function(){
    console.log((100+50)*3)
});
$(function(){
    console.log(100+50-3)
});
let h1 = 10;
$(function(){
    console.log(h1)
});
let j1 = 10;
j1+=5;
$(function(){
    console.log(j1)
});
let k1 = 10;
k1-=5;
$(function(){
    console.log(k1)
});
let l1 = 10;
l1*=5;
$(function(){
    console.log(l1)
});
let z1 = 10;
z1/=5;
$(function(){
    console.log(z1)
});
let x1 = 10;
x1%=5;
$(function(){
    console.log(x1)
});
$(function(){
    c1 = "volvo" + 16;
    console.log(c1)
});
$(function(){
    c2 = 16 + "volvo";
    console.log(c2)
});
$(function(){
    c3 = 16 + 4 + "volvo";
    console.log(c3)
});
$(function(){
    //함수
    c3 = 16 + 4 + "volvo";
    console.log(c3)
    //
    var v1 = myfunction(4,3);
    console.log(v1)
    function myfunction(a,b){
        return a*b;
    }
    //
    function toCelsius(f3) {
        return (5/9) * (f3-32);
    }
    console.log(toCelsius(77))
    //
    function ash(g1){
        return (5/9) * (g1-32);
    }
    console.log(ash)
    //
    console.log("The temperature is " + ash1(77) + " Celsius")
    function ash1(sh){
        return (5/9) * (sh-32);
    }
});














