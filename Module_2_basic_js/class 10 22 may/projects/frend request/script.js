const acceptBtn = document.getElementsByClassName("done")

const acccont = document.getElementById("accepted")
const rejcont = document.getElementById("rejected")

function acceptRequest(event){
    // alert("request accepted")
    //    to get parentNode jst need to write .parentNode
    //to get children node .children
   const btnref = event.target
   const parentNode = btnref.parentNode.parentNode
   const name = btnref.parentNode.parentNode.children[0].children[1].children[0].innerText;
   parentNode.children[1].remove();
  acccont.append(parentNode)
   alert(name+" request accepted")
}

for(let i=0;i<acceptBtn.length;i++){
    acceptBtn[i].addEventListener("click",acceptRequest)
}



const rejectBtn = document.getElementsByClassName("close")

function rejectRequest(event){
    // alert("request rejected")
//    to get parentNode jst need to write .parentNode
//to get children node .children
   const btnref = event.target
   const parentNode = btnref.parentNode.parentNode
   const name = btnref.parentNode.parentNode.children[0].children[1].children[0].innerText;
   parentNode.children[1].remove();
   rejcont.append(parentNode)
   alert(name+" request rejected")
}

for(let i=0;i<rejectBtn.length;i++){
    rejectBtn[i].addEventListener("click",rejectRequest)
}
