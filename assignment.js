//feetToMile conversion function
function feetToMile(feet){
    if(feet >= 0){
        let mile = feet * 0.00018939;
        return mile;
    }
    else{
    let mile = "Please Enter valid value.";
    return mile;
    }
}
const result1 = feetToMile(5);
console.log("The Result is :", result1);

//woodCalculator function
function woodCalculator(furniture){
    for(var arr of furniture){                                                  // To avoid negative input
        if(arr < 0) 
        return "Please enter valid value";
    }
    let i = 0;
    let sum = (furniture[i] * 1) + (furniture[i+1] * 3) + (furniture[i+2] * 5);   // 1, 3, 5 are measuring units in cubic feet
    return sum;
}
let furniture = [4, 6, 2];                                                     // Here furniture = ["chair", "table", "cot"].All values in units
var result2 = woodCalculator(furniture);
console.log(result2);                                                           // Result is in cubic feet

//brickCalculator function
const brickPerHeight = 1000;                                                   // Amount of brick  
let totalBrick  = 0;
let totalBrick1 = 0;
let totalBrick2 = 0;
let totalBrick3 = 0;
function brickCalculator(n){                                                   // Here n is the no of floor
    if(n<=10 && n>0){   
    const total = 15 * brickPerHeight * n;                                     // 15 is the height of single(upto 10th) floor
        totalBrick = totalBrick + total;
        return totalBrick;
    }if (n > 10 && n <= 20) {
        const totalBrick1 = 150000 + (12 * brickPerHeight * (n-10));          // 12 is the height of single(above 10th) floor
        return totalBrick1;
    }if (n > 20) {
        const totalBrick2 = 270000 + (10 * brickPerHeight * (n-20));         // 10 is the height of single(above 20th) floor
        return totalBrick2;
    }
    else{
        const totalBrick3 = "Please Enter valid value";
        return totalBrick3;
    }
}
const result3 = brickCalculator(25);
console.log(result3);                                                       // Result indicates amount of brick

//tinyFriend function
function tinyFriend(name){
    for (var i = 0; i < name.length; i++) {                               // To Remove White Space
        name[i] = name[i].trim();
    }
    let smallest = name[0];
    for (let i = 1; i < name.length; i++) {
        if (name[i].length < smallest.length) {
            smallest = array[i];
        }
    }
    return smallest;
}
let name = [" Sad ", "Ayyan", "Monirul", "Easha", "Tina"];
const result4 = tinyFriend(name);
console.log(result4);