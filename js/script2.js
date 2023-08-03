function hide_passcode(){
    let passcode_field=document.getElementById("inputs_pass");
  
    let hide_btn=document.getElementById("hide");
  
    let show_btn=document.getElementById("show");
  
    if (passcode_field.type==="text"){
      passcode_field.type="password";
      hide_btn.display.style="none";
      show_btn.display.style="block";
    }
  }
  
  function  show_passcode()
  {
    let passcode_field=document.getElementById("inputs_pass");
  
    let hide_btn=document.getElementById("hide");
  
    let show_btn=document.getElementById("show");
  
    if(passcode_field.type==="password"){
      passcode_field.type="text";
      show_btn.style.display="none";
      hide_btn.style.display="block";  
    }
    else{
      hide_passcode();
    }
  }
  

  document.addEventListener("DOMContentLoaded",function(){
    var passcode_field=document.getElementById("inputs_pass");
  
    var hide_btn=document.getElementById("hide");
  
    var show_btn=document.getElementById("show");
    
    passcode_field.addEventListener("input",function(){
             if(passcode_field.value.trim()===""){
             hide_btn.style.display="none";
              show_btn.style.display="none";
             }
             else if(passcode_field.type==="password"){
             show_btn.style.display="block";
              // pass_lbl.style.display="block";
             }
    })
  });
