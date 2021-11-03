//write your code here
function reverseFunction (str) {
    let reverse = "";
    for(let i = str.length-1; i >= 0; i--){
        reverse += str[i]
    } 
    return reverse
}
console.log(reverseFunction("Frank"))