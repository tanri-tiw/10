const rateButton=Array.from(document.querySelectorAll(".rating"))
let rating=0;
const initial=document.getElementById("initial");
const final=document.getElementById("final");
const span=document.getElementById("rate");
rateButton.forEach(function(e) {
   e.addEventListener("click",function () { 
  rating=e.innerHTML;
  e.classList.add("focus_col");

    })
    
});
function submit(){
if(rating===0){
    alert("RAte")
}
else{
    
    initial.classList.add("hidden");
    final.classList.remove("hidden");
    span.innerText=rating;

    
}
     
        
        
 
}

        


