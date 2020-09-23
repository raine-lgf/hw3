/* HOMEWORK 3
Example 1 JavaScript code
*/
console.log("Felix's Output from HW 3 Example 1");

var name=prompt("Enter name: ");
var grade=parseInt(prompt("Enter grade"));

if(grade<0){
    console.log("Invalid grade");
}
else{
    console.log("Hello "+name);
    
    if(grade>=0 && grade<=30){
        console.log("Your grade standing is Freshman");
    }
if(grade>=31 && grade<=60){
    console.log("Your grade standing is Sophomore");
}
if(grade>=61 && grade<=90){
    console.log("Your grade standing is Junior");
}
if(grade>=91){
    console.log("Your grade standing is senior");
}

}