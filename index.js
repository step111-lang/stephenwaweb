const commentC=document.querySelector(".commentC");
   const comment=document.querySelector(".comment");
   const commentB=document.querySelector(".commentB");
  const feedback=document.querySelector(".feedback");
commentB.addEventListener("click",(e)=>{
  if(comment.value !=""){
    e.preventDefault();
  let mql=document.createElement("div");
  mql.setAttribute("class","feedbackcomment");
  mql.textContent=comment.value;
  feedback.appendChild(mql);
  let del=document.createElement("div");
  del.innerHTML="REPORT";
  del.setAttribute("class","delete");
  mql.appendChild(del);
}
 var dels=document.getElementsByClassName("delete");
  for(let i=0;i<dels.length;i++){
   dels[i].addEventListener("click",()=>{
     dels[i].parentNode.style.background="orange";
     dels[i].parentNode.style.color="red";
     dels[i].classList.add("jin"); 
     dels[i].innerHTML="DELETE";
      if(dels[i].innerHTML == "DELETE"){
         dels[i].addEventListener("click",()=>{
         dels[i].parentNode.remove();
          });
        }
    
  });
  
  }
  comment.value="";
 
});

