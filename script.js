const greeting="Hello";
const div = document.getElementById(`container`)
div.innerHTML=greeting;


const namegreet=document.getElementById(`name`)
const form=document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    const text=namegreet.value;
    div.innerHTML=greeting+", "+text;

})


const boxes=document.querySelectorAll(`.colorboxes`)
boxes.forEach(function(box){
    box.addEventListener('click',function(){
    const color=box.textContent.trim();
    if(color==='Yellow'){
        box.style.backgroundColor=color;
    box.style.color="black"
    }else{
    box.style.backgroundColor=color;
    box.style.color="white"}

})
})