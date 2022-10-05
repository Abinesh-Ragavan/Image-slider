const nextEl =document.querySelector(".next");
const imageContainerEL =document.querySelector(".image-container");
const imgEl =document.querySelectorAll("img")
const prevEL =document.querySelector(".prev");
prevEL.addEventListener(("click"),()=>{
    
currentimg--;
clearTimeout(timeout);
updateimg();s
})

let  currentimg =1;
let timeout ;
nextEl.addEventListener(("click"),()=>{
    currentimg++;
    clearTimeout(timeout);
    updateimg();

})
updateimg()
function  updateimg(){
    if(currentimg>imgEl.length){
        currentimg=1;
    }
    else if(currentimg<1){
        currentimg=imgEl.length;
    }
   imageContainerEL.style.transform =`translateX(-${(currentimg -1 )*500}px)`;
   timeout=setTimeout(()=>{
        currentimg++;
        updateimg();
   },3000)



}