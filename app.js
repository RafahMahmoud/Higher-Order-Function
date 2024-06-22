//Q1

let numbers = prompt("Enter numbers separated by spaces");
let array = numbers.split(" ");
console.log(array);
let newArray = [];
for (let index = 0; index < array.length; index++) {  
    newArray[index] = Math.pow(2,array[index]);
}
document.write(newArray);




// let numbers = prompt("Enter numbers separated by spaces");
// let array = numbers.split(" ");
// console.log(array);
// let newArray = [];
// array.forEach(element => {
//     newArray.push(Math.pow(2,element)) ;
// });
// document.write(newArray);



// let numbers = prompt("Enter numbers separated by spaces");
// let array = numbers.split(" ");
// console.log(array);
// let newArray = array.map((x) => 2 ** x);
// document.write(newArray);

// let numbers = prompt("Enter numbers separated by spaces");
// let array = numbers.split(" ");
// console.log(array);
// let newArray = array.map((x) => Math.pow(2,x));
// document.write(newArray);




//Q2

// function type() {
// let numbers = prompt("Enter an array separated by spaces");
// let array = numbers.split(" ");
// let newArray = [];
// let x = 0;
// while (x<array.length) {
//     let num = parseFloat(array[x]);
//     // even when i didn't write the sentance above and use array[x] it works
//     if (isNaN(num)) {
//         newArray.push("N/A") 
//     } else if(num %2 == 0) {
//         newArray.push("even") 
        
//     }
//     else{
//         newArray.push("odd") 
//     }
//     x++;
// } 
// return newArray
// }
// document.write(type());



    // function input() {
    //     var numbers = prompt("Enter numbers separated by spaces");
    //     var array = numbers.split(" ");
    
    //     function type(num) {
    //         let parsedNum = parseFloat(num);
    //         if (isNaN(parsedNum)) {
    //             return "N/A";
    //         } else if (parsedNum % 2 === 0) {
    //             return "even";
    //         } else {
    //             return "odd";
    //         }
    //     }
    
    //     var resultArray = array.map(type); // Apply type() to each element in array
    //     document.write(resultArray.join(", ")); // Output the result array as a comma-separated string
    // }
    
    // input();
    




//Q3

// let array = ["Rawan","Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
// document.write(array);
// let br = document.createElement("br");
// document.body.appendChild(br);
// array.forEach(element => {
//     document.write(element + " ")
// });





//Q4

// function type() {
// let numbers = prompt("Enter numbers separated by spaces");
// let array = numbers.split(" ");
// let newArray = [];
// let x = 0;
// while (x<array.length) {
//     let num = parseFloat(array[x]);
//     // even when i didn't write the sentance above and use array[x] it works
//     if (num%3 ==0 && num%5 ==0) {
//         newArray.push("Fizz Buzz") 
//     } else if(num%3 ==0) {
//         newArray.push("Fizz") 
        
//     }
//       else if(num%5 ==0) {
//     newArray.push("Buzz") 
    
// }
//     else{
//         newArray.push(num) 
//     }
//     x++;
// } 
// return newArray
// }
// document.write(type());