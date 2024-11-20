// console.log("ankita love javascript");

// variables checking
/*var _myName ="ankita";
var _1my__Name="prasad";
// var 1myName="anku loves js"; //never start varible name with number ,not valid 
var $myName ="js tutorial";
console.log(_myName);
console.log(_1my__Name)
// console.log(1myName)
console.log($myName)*/

// DATATYPES  and check datatype with help typeof()
/*var MyMsg="JAVASCRIPT IS MY JAAN";
console.log("HERE IS SOME MESSGAGE FOR YOU : ",MyMsg);
console.log(typeof(MyMsg));

var MyNumber=739865789;
console.log("contact me : ",MyNumber);
console.log(typeof(MyNumber));

var Myfollow =true;
console.log("yes i follow you: ",Myfollow);
console.log(typeof(Myfollow));

var MyEmpty;
console.log("EMPTY INFORMATION: ",MyEmpty);
console.log(typeof(MyEmpty));

var MyNull=null;
console.log("nothing INFORMATION: ",MyNull);
console.log(typeof(MyNull));*/

//some questions
/*let a =10;
let b ="20";
console.log("number and string concatination with each other :",a+b);//1020
console.log(10+"20")//1020

let c= 9;
let d="5"
console.log(" here is bug :",c-d);//4

let j="java";
let s= "script";
console.log("two string are concatinate with each other : ",j+s);//javascript

console.log("two string are concatinate with each other : ",j-s);// not a number (NaN)

console.log("no msg here :"," " + " "); // no msg here empty string
console.log(" "+0)//0

console.log(true + true)//1 + 1 = 2

console.log(true + false)//1 + 0 = 1

console.log(false + true)//0 + 1 = 1

console.log(false - true)//1 + 1 = -1

console.log(true - false)//1 + 1 = 1

console.log(false - false)//1 - 1 = 0*/


//interview questions
//what is different betwwen null vs undefine?
//null : null is object datatype.
/*var imuseless=null;
console.log(imuseless)
console.log(typeof(imuseless))

//undefined: varible assign kiye but kistype datatype ka value diya jaye woh desided nhi kiya gya  hai toh woh undefine hota hai.example:
var x;

//Nan: not a number when we mins two strings then our output is NaN.1.NaN is a property of the global object.it is a varible in global scope.
isNaN()//to check the value is number or other
*/


//some Tricky questions
/*console.log(NaN===NaN);//false
console.log(Number.NaN===NaN);//false
console.log(isNaN(NaN))//true
console.log(isNaN(Number.NaN))//true
console.log(Number.isNaN(NaN))//true*/

//expressions and opreators
/* ASSIGNMENT  OPREATORS */
//  let a= 20;
//  var u=20;
//  console.log("is both a and u are equal or not" + a==u )//false beasue of + operators .this is wrong way
// console.log(a==u )//true

// /* ARITHIMETICE OPREATORS */
// console.log(3+3)
// console.log(3-3)
// console.log(3*3)
// console.log(3/3)
// console.log(10%3)

/*INCREAMENT AND DECREAMENT */
// PREFIX(--X,++X) AND POSTFIX(X++,X--)
/* POSTFIX */
// let x =15;
// let y=x++;
// let z=y++;
// console.log("BEFORE INCREAMENT x : ",x);//16
// console.log("AFTER INCREAMENT y : ",y);//16

// console.log("AFTER INCREAMENT z : ",z);//15

/* PREFIX */
// let x =15;
// let y=--x;
// // let z=y++;
// console.log("BEFORE INCREAMENT x : ",x);//14
// console.log("AFTER INCREAMENT y : ",y);//14
// console.log("AFTER INCREAMENT z : ",z);//15


/*COMPARISON OPERATOR */
//result alway boolean value like true and false
//equl ==
/*var s= 10;
var v= 10;
console.log(s==v)//true
//not equl to !
var s= 10;
var v= 40;
console.log(s!=v)//true
//greater than >
console.log(v>s)//true
//greater than >=
console.log(s>=v)//false
//less than <
console.log(s<v)//true
//less than <=
console.log(v<=s)//false*/

/*LOGICAL OPERATOR */
//result alway boolean value like true and false
// &&, ||, !
 
//&& : both are true  and false
//|| : only one true the true
//! : true - false and false -true

/*STRING OPERATORS */
//+ CONCATENATION OPERATOR

/*TANARY OPERATORS */
//work like if else
//? true : false , work on three operand
// var age=18;
// let a = age>=18 ? "eligble" : "not eligble";
// console.log(a)
/*SOME QUESTIONS */
/*console.log(3**3);//exponentiation
//3*3*3
console.log(9**2);//9*9=81

let a=10
let b="ankita"
console.log(a+b);//10ankita
//swapping two number with 3rd variable
var c=5;
var d=10;
var t;
t=c;
c=d;
d=t;
console.log(c,d);

//swapping two number without 3rd variable
var c=5;
var d=10;
c=c+d;//5+10=15
d=c-d//15-10 = 5
c=c-d//15-5=10

console.log(c,d);*/


