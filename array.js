//TARVERSAL IN ARRAY
// to get single data at at time and change the data
// var myArr = new Array;
//   myArr=["ankita" ,24, 8.35,true,"she love javascript"];

// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);
// console.log(myArr[5]);//undefined



//if we want at a time to print whole array values
// if want to check the length of elements of an array
// console.log(myArr.length)



//we use for loop to navigate
// for(var i=0;i<myArr.length;i++)
// {
//     console.log(myArr[i]);
// }


//after Es6 we have for..in and for..of loop too
// var myArr = new Array;
// myArr=["ankita" ,24, 8.35,true,"she love javascript"];
//for..in loop
// for(let elements in myArr)
// {
//     console.log(elements);//index number
// }
//for..of loop
// for(let elements of myArr)
//     {
//         console.log(elements);//values
//     }


//foreach loop:calls a function for foreach elements in the array
//we cant use break statement
// myArr.forEach(function(element,index,array)
// {
//     console.log(element + " index :" + index + " " +array);
// });

//ARROW FUNCTION
// myArr.forEach((element,index,array)=>
// {
//     console.log(element + " index :" + index + " " +array);
// });



//SEARCH AND FILTER ARRAY
// var myArr = new Array;
// myArr=["ankita" ,24, 8.35,true,"she love javascript",2024,"ankitaprasad2799@gmail.com",7430995502,"full stack developer",false  ];

// console.log(myArr.length);
// myArr.forEach(function(element,index,array)
// {
//     console.log(element);
// })

// var resultFilter = myArr.filter(checkFilter)
// console.log(resultFilter);

// function checkFilter(age)
// {
//         return age>=20;
// }

// search
// let search = myArr.indexOf(2024);
// console.log(search);

// let lastsearch = myArr.lastIndexOf("full stack developer");
// console.log(lastsearch);

//INSERT ARRAY
// var myArr = new Array;
// myArr=["ankita" ,24, 8.35,true,"she love javascript",2024,"ankitaprasad2799@gmail.com",7430995502,"full stack developer",false];

// console.log(myArr.length);
// myArr.forEach(function (elements,index,array){
//     console.log(elements + " :index" +index);

// });
// console.log("after modify: result is here")
// myArr[5]= 2022;
// myArr.forEach(function (elements,index,array){
//     console.log(elements + " :index" +index);

// });
// console.log("after insert: result is here")
// myArr[10]=9.00;
// myArr.forEach(function (elements,index,array){
//     console.log(elements + " :index" +index);

// });
// console.log("after delete: result is here")
// delete myArr[3];
// myArr.forEach(function (elements,index,array){
//     console.log(elements + " :index" +index);

// });

//SORT ARRAY
var a = ["ankita", "shubham","riya","piyush","kirti","nisha","vidhya","barsha"];
a.sort();
console.log("sort: ",a);
console.log("after reverse: ");
a.reverse();
console.log(a);
console.log("after ADD USING PUSH METHOD: ");
a.push("anku darling");
console.log(a);
console.log("after delete USING Pop METHOD: ");
a.pop();
console.log(a);
console.log("after delete USING shift METHOD: ");
a.shift();
console.log(a);
console.log("after add USING unshift METHOD: ");
a.unshift("javascript is my favorite");
console.log(a);



