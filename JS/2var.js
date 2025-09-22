/*let age= 25;
let price=10.99;
console.log(`You are ${age}`);
console.log(`The price is $${price}`);

console.log(typeof age)

//strings

let fir="Bro code"
console.log(typeof fir)
console.log(fir)
console.log(`You are ${fir}`)


//booleans
let online=true
console.log(`tkt is online: ${online}`)

*/

let fullname='tharun'
let age=25
let stud=true

document.getElementById('p1').textContent=(`Your name is ${fullname}`)
document.getElementById('p2').textContent=(`Your age is ${age}`)
document.getElementById('p3').textContent=(`Enrolled: ${stud}`)


let username
document.getElementById("btn").onclick=function(){
    username=document.getElementById("myid").value
    //console.log(username)
    document.getElementById("myh1").textContent=(`Hello ${username}`)
}
