window.addEventListener('load', function(){
    
    var hililightelement = document.querySelectorAll(".hilightable");
    for(i=0; i < hililightelement.length; i++) {
      var toggle = (event) => { event.target.classList.toggle('highlight') }
      hililightelement[i].addEventListener('focus', toggle)
      hililightelement[i].addEventListener('blur', toggle)
    }
  
     
    var form=document.getElementById("mainForm");
    form.addEventListener("submit", check);
    function check(event){
      var requiredelements = document.querySelectorAll(".required");
      for(i=0; i < requiredelements.length; i++){
        if(requiredelements[i].value == "")
        {
            event.preventDefault();
            requiredelements[i].classList.add("error");
        }
        else {
          requiredelements[i].classList.remove("error");
        }
  
      }
    }
    form.addEventListener("reset", resetForm)
  
    function resetForm(event){
      var requiredelements = document.querySelectorAll(".required");
      for(i=0; i < requiredelements.length; i++){
        requiredelements[i].classList.remove("error");
      }
    }
  
  })
/* add code here  */