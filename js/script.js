function get_data(){
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    localStorage.setItem(email,pass);

    var db = openDatabase('mydb', '1.0', 'My Web SQL Database', 2 * 1024 * 1024);
    db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS mytable (id unique, data)');
});
    db.transaction(function(tx) {
    tx.executeSql('INSERT INTO mytable (id, data) VALUES (?, ?)', [email,pass ]);
});

    console.log("Email:"+email);
    console.log('pass:'+pass)
}

  var fetched_button=document.getElementById("login_button");

  fetched_button.addEventListener("click", function(){
    get_data();
  });

document.addEventListener("DOMContentLoaded",function(){
  var passinput=document.getElementById("pass");
  var passlabel=document.getElementById("showpass");
  var pass_lbl=document.getElementById("pass_label");
  
  passinput.addEventListener("input",function(){
           if(passinput.value.trim()===""){
            passlabel.style.display="none";
            pass_lbl.style.display="none";
           }
           else if(passinput.type==="password"){
            passlabel.style.display="flex";
            // pass_lbl.style.display="block";
           }
  })
});


function hidepass(){
  var passinput=document.getElementById("pass");
  var passlabel=document.getElementById("showpass");
  var hidelabel=document.getElementById("hide");
  if (passinput.type==="text"){
    passinput.type="password";
    hidelabel.style.display="none";
    passlabel.style.display="flex";
    

  }
}

function passvisibility(){
  var passinput=document.getElementById("pass");
  var passlabel=document.getElementById("showpass");
  var hidelabel=document.getElementById("hide");

  if(passinput.type==="password"){
    passinput.type="text";
    passlabel.textcontext="Hide Password";
    passlabel.style.display="none";
    hidelabel.style.display="flex";

  }
  else{
    hidepass();
  }
}



  

