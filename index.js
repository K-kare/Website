//console.log('Hello');
//Window.alert('This is an alert!');
//This is a comment
const decreaseBtn = document.getElementById("decreaseBtn");
const resetbtn = document.getElementById("resetBtn");
const increasebtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count= 0;
    countlabel.textContent = count;
}