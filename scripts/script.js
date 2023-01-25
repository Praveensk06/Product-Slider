// get elements
const images = document.querySelectorAll('.img a');
const imgSelect = document.querySelectorAll('.img');

const plusBtn=document.getElementById('plus');
const minusBtn = document.getElementById("minus");
const qtyEl = document.getElementById("quantity");



// global variables
let imgId = 1;


// select all img links using for each
images.forEach((img)=>{
  img.addEventListener('click',(e)=>{
    e.preventDefault();
    // get data-id for images
    imgId=img.dataset.id;

    
imgSelect.forEach((img) => {
  img.classList.remove("active");
});
    img.parentElement.classList.add('active');
    moveImage();
  });
});



// function
function moveImage(){

  // get image width using clientWidth
  const imgWidth = document.querySelector('.main-img img:first-child').clientWidth;

  let width =(imgId-1)*imgWidth; 

document.querySelector('.main-img').style.transform=`translateX(${-width}px)`;

  
};

// event listeners for minus btn & plus btn
minusBtn.addEventListener('click',()=>{
  let qty=parseInt(qtyEl.value);
  if(qty>0){
    qty--;
    qtyEl.value=qty;
  }
});

plusBtn.addEventListener("click", () => {
  let qty = parseInt(qtyEl.value);
  if (qty > 0) {
    qty++;
    qtyEl.value = qty;
  }
});