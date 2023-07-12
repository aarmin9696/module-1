//on clicking button modal will be visible

const btn = document.getElementById("open")
const cont = document.getElementsByClassName("modal-container")[0]
function openModal(){
    
    cont.style.display="flex"
    cont.style.animation = "transition 0.8s linear"
}
function hideModal(){
    cont.style.animation="reverse-transition 0.8s linear"
    
    setTimeout( () => {
        cont.style.display="none"
    },200)
}

btn.addEventListener("click",openModal)

const closeBtn = document.getElementsByClassName("close")[0]
closeBtn.addEventListener("click", hideModal)