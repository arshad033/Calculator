//selecting all the elements
let display = document.querySelector("#display");
let num = document.querySelectorAll(".num-value");
let opr = document.querySelector(".opreator");
let cl = document.querySelector("#clear");
let del = document.querySelector("#delete");

let str = '';
//entering expression
function disp(val){
    display.textContent = val;
}
num.forEach((num) =>{
    num.addEventListener('click',function(){
        str += num.textContent;
        disp(str);
    })
})
opr.addEventListener("click", ()=>{
    str += opr.textContent;
    console.log("56");
})
cl.addEventListener("click", ()=>{
    str = '';
    display.textContent = '--'
})
// del.addEventListener("click", ()=>{
//    let seperateArr = Array.from(str); //spiliting the string into seperate character in array
//    seperateArr.pop();
//    str = seperateArr;
//    disp(str.toString());
// })