const elBtn = document.querySelector(".site-header__dark");
const elbody = document.querySelector("body")

elBtn.addEventListener("click",function(){

    elbody.classList.toggle("dark")

})