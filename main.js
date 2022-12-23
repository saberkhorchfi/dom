let btnsPlus=document.getElementsByClassName("aug")
for(let i=0;i<btnsPlus.length;i++){
    btnsPlus[i].addEventListener('click',function(e){
        var cible=e.target
        let parent=cible.parentElement
        let qteElement=parent.getElementsByClassName('inputqte')[0]
        qteElement.value= parseInt(qteElement.value)+1 
        let h3=e.target.parentElement.parentElement.querySelector(".legende").querySelector(".price")
        let sum=document.getElementById("somme")
        sum.value=parseFloat(sum.value)+parseFloat(h3.textContent)
    })
}



let btnsmoins=document.getElementsByClassName("dim")
  for(let i=0;i<btnsmoins.length;i++){
    btnsmoins[i].addEventListener('click',function(e){
        var butt=e.target
        let parent=butt.parentElement
        
        let qteElement=parent.getElementsByClassName('inputqte')[0]
        if( qteElement.value>0){
        qteElement.value= parseInt(qteElement.value)-1 
        let h3=e.target.parentElement.parentElement.querySelector(".legende").querySelector(".price")
        let sum=document.getElementById("somme")
        sum.value=parseFloat(sum.value)-parseFloat(h3.textContent)


      }
  })
}

//button like
function myFunction(d) {
  console.log(d)
  d.classList.toggle("ilike");
}


//delete card and reset price
var close = document.getElementsByClassName("delete");

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    let qteElement=div.getElementsByClassName('inputqte')[0]
  
    let prixfixe=div.getElementsByClassName('price')[0] 
    
    let prixtot=document.getElementById('somme')
    prixtot.value=parseInt( prixtot.value)-(parseInt(prixfixe.textContent)*parseInt(qteElement.value))

    div.remove()

  }}

