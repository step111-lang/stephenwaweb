const profile=document.querySelector(".profile");
const wd=document.querySelector(".wd");
const driver=document.querySelector(".driver");
const data=document.querySelector(".data");
   const btn=document.querySelector("#btn");
   const chanses=document.querySelector(".chanses");
   const commentC=document.querySelector(".commentC");
   const comment=document.querySelector(".comment");
   const commentB=document.querySelector(".commentB");
  const feedback=document.querySelector(".feedback");
 const aboutcontainer=document.querySelector(".aboutcontainer");
  const flash=document.querySelector(".flash");
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

var f1=[
{
  context:"POINTS",
  company:" COMPANY ",
  drivers:"DRIVER",
  date:"LATEST GP"
},
{
  context:"366",
  company:"REDBULLS",
  drivers:"MAX-VERSTERPEN",
 date:"--p1"
},
{
  context:"252",
  company:"REDBULLS",
  drivers:"SERGIO-PEREZ",
  date:"--p"
},
{
  context:"46",
  company:"ALPHA ROMEO",
  drivers:"VETTALI-BOTTAS",
  date:"_"
},
{
  context:"180",
  company:"MERCEDES BENZ",
  drivers:"LEWIS-HAMILTON",
  date:"_"
},
{
  context:"68",
  company:"ALPINE",
  drivers:"FERNANDO-ALONSO",
  date:"_"
},
{
  context:"11",
  company:"ALPHATAURI",
  drivers:"YUKI-TSUNODA",
  date:"_"
},
{
  context:"23",
  company:"ALPHATAURI",
  drivers:"PIERRY-GASSLY",
  date:"_"
},
{
  context:"101",
  company:"MUCLAREN",
  drivers:"LANDO-NORIS",
  date:"_"
},
{
  context:"253",
  company:"FERRARI",
  drivers:"CHARLES-LECLER",
 date:"_"
},
{
  context:"12",
  company:"HASS",
  drivers:"KELVIN-SCHUMACKER",
   date:"_"
},
{
  context:"202",
  company:"FERRARI",
  drivers:"CARLOS-SAINZ",
  date:"_"
},
{
  context:"4",
  company:"WILLIAMS",
  drivers:"ALEX-ALBON",
  date:"_"
},
{
  context:"29",
  company:"MUCLAREN",
  drivers:"DANIEL-RICCARDO",
  date:"_"
},
{
  context:"203",
  company:"MERCEDES BENZ",
  drivers:"GEORGE-RUSSELL", 
 date:"_"
},
{
  context:"32",
  company:"ASTO MARTIN",
  drivers:"SEBASTIAN-VETTLE",
  date:"_"
},
{
  context:"78",
  company:"ALPINE",
  drivers:"ESTERBAN-OCON",
  date:"_"
},

{
  context:"12",
  company:"ASTO MARTIN",
  drivers:"STROLL",
  date:"_"
},
{
  context:"6",
  company:"ALPHA ROMEO",
  drivers:"ZHAU-ZHAU",
 date:"_"
},
{
  context:"22",
  company:"HASS",
  drivers:"KELVIN-MUGNASSEN",
 date:"_"
},
{
  context:"2",
  company:"WILLIAMS",
  drivers:"NICOLAS-LATIFI",
  date:"_"
},
{
  context:"0",
  company:"WILLIAMS",
  drivers:"NICOLAS-LATIFI"
} 
 ];
function gok(jok){
let item="" ;
for(let i=0;i<jok.length;i++){
 item+=`<div class="row"><div class="ext"></div><div class="context">${jok[i].context}</div><div class="company">${jok[i].company}</div> <div class="drivers">${jok[i].drivers}</div><div class="date">${jok[i].date}_</div></div>`;
}
return item;
}
document.querySelector(".instadv").innerHTML=`${gok(f1)}`;

var timer=setInterval(time,1000);
var t=10;
function time(){
 t++
 if(t >= 10){
  
  for(let i=0;i<s.length;i++){
     let x=s[i].getElementsByClassName("context")[0];
     let y=s[i+1].getElementsByClassName("context")[0];
       if(Number(x.innerHTML) < Number(y.innerHTML)){
         s[i].parentNode.insertBefore(s[i+1],s[i]);
          const ext=document.getElementsByClassName("ext");
            let count=1;
             for(let i=1;i<ext.length;i++){
               count++;
              ext[i].innerHTML=count;
            }
         
        }
        
      }
  }

}
const tab=document.querySelector(".instadv");
const s=tab.getElementsByClassName("row");
const ti=setInterval(doj,2000);
let r=10;
   function doj(){
         r++;
         if(r>=1){
           profile.classList.remove("profiledup");
            
          }
    }
for(let i=0;i<s.length;i++){
  s[i].addEventListener("click",(e)=>{
        let x=s[i].getElementsByClassName("context")[0];
         let top=e.target.getElementsByClassName("drivers")[0];
        let y=s[i+1].getElementsByClassName("context")[0];
          let str=String(x.innerHTML);
          let j=Math.floor((Number(y.innerHTML) / Number(x.innerHTML))*100);
          let pk=Math.floor(Number(y.innerHTML)- Number(x.innerHTML));
          chanses.innerHTML=j;
          driver.textContent=top.textContent;
         wd.innerHTML=pk;
       data.classList.add("datadup");
        
        });   
 }
      
let gti=setInterval(hut,1000);
let gt=0;
function hut(){
 gt++;
  if(gt>=20){
       data.classList.remove("datadup");
   }
}  
 

const colo=document.getElementsByClassName("company");
for(let i=0;i<colo.length;i++){
   if(colo[i].innerHTML=="REDBULLS"){
      colo[i].parentNode.style.background="linear-gradient(rgba(20,230,230,1),navy)";
     }
  if(colo[i].innerHTML=="MERCEDES BENZ"){
      colo[i].parentNode.style.background="linear-gradient(lightblue,rgba(20,230,240,0.7))";
     }
 if(colo[i].innerHTML=="WILLIAMS"){
      colo[i].parentNode.style.background="linear-gradient(blue,lightblue)";
     }
 if(colo[i].innerHTML=="MUCLAREN"){
      colo[i].parentNode.style.background="linear-gradient(darkorange,yellow)";
     }
 if(colo[i].innerHTML=="ASTO MARTIN"){
      colo[i].parentNode.style.background="linear-gradient(green,lightgreen)";
     }
if(colo[i].innerHTML=="FERRARI"){
      colo[i].parentNode.style.background="linear-gradient(red,orange)";
     }
if(colo[i].innerHTML=="HASS"){
      colo[i].parentNode.style.background="linear-gradient(gray,white)";
     }
if(colo[i].innerHTML=="ALPHATAURI"){
      colo[i].parentNode.style.background="linear-gradient(5deg,black,white)";
     }
if(colo[i].innerHTML=="ALPHA ROMEO"){
      colo[i].parentNode.style.background="linear-gradient(RED,WHITE)";
     }

if(colo[i].innerHTML=="ALPINE"){
      colo[i].parentNode.style.background="linear-gradient(lightblue,rgba(230,23,230,0.7))";
     }
if(colo[i].innerHTML==" "){
      colo[i].parentNode.classList.add("dig");
     }
if(colo[i].innerHTML==""){
      colo[i].parentNode.classList.add("dig");
      
     }

if(colo[i].innerHTML==" COMPANY " || ""){
      colo[i].parentNode.classList.add("dig");
     }
    if(colo[i].innerHTML=="CHELSEA"){
      colo[i].parentNode.classList.add("dig");
      
     }
 
 }

flash.addEventListener("click",()=>{
 profile.classList.add("profiledup");
 profile.innerHTML="LIGHT MODE TOGGLED";
 let dot=document.body;
 dot.classList.toggle("dark");
 aboutcontainer.classList.toggle("aboutdark");
 commentC.classList.toggle("commentCdark");
 btn.classList.toggle("btndark");
 data.classList.remove("datadup");
});
const bt2=document.querySelector(".b2");
const bt1=document.querySelector(".b1");
bt2.addEventListener("click",()=>{
 profile.classList.add("profiledup");
 data.classList.remove("datadup");
 profile.innerHTML="OPENING WHATSAPP";
});
bt1.addEventListener("click",()=>{
 profile.classList.add("profiledup");
 data.classList.remove("datadup");
 profile.innerHTML="OPENING TELEGRAM";
});

