let toggle=document.querySelector(".gayab_vam").addEventListener("click",jadu);
    let toggle_div=document.querySelector("#toggle_vam").addEventListener("click",jadu);
    function jadu(){
        //console.log("jadu")
        document.querySelector("#login_vam").style.display="none";
        document.querySelector("#signup_vam").style.display="block";
    }
    let toggle2=document.querySelector(".gayab2_vam").addEventListener("click",jadu2);
    function jadu2(){
        //console.log("jadu")
        document.querySelector("#login_vam").style.display="block";
        document.querySelector("#signup_vam").style.display="none";
    }



    //Sign UP Verification
   var user_data=JSON.parse(localStorage.getItem("User_data"))||[];
   let sign=document.querySelector("#btn-signup_vam");
   sign.addEventListener("click",Sign_up);
   function Sign_up(){
     let first_name=document.querySelector("#sfname_vam").value;
     let last_name=document.querySelector("#slname_vam").value;
     let mail=document.querySelector("#semail_vam").value;
     let mob=document.querySelector("#smb_vam").value;
     let pass=document.querySelector("#signup-password_vam").value;

     var signup_obj={
      first_name:first_name,
      last_name:last_name,
      email:mail,
      mobile:mob,
      password:pass
     }
     //-----------------------------SAHI-------------------------------------------------------
      let flag=false;
    if(first_name!=""&&last_name!=""&&mail!=""&&mob!=""&&pass!=""){
      if(user_data.length==0){
        alert("Signup-Succesfull")
         //Local Storage
         user_data.push(signup_obj);
            localStorage.setItem("User_data",JSON.stringify(user_data))
          //Diverting to Login
            jadu2();
      }
      else{
        for(let i=0;i<user_data.length;i++){
        if(user_data[i].email==mail){
          alert("Email Already Exist Try Again");
          flag=true;
          break;
          
        }
      }
        if(flag==false){
          alert("Signup-Succesfull");   
          //Local Storage
            user_data.push(signup_obj);
            localStorage.setItem("User_data",JSON.stringify(user_data))
          //Diverting to Login
            jadu2();
        }
      }
     
    }
    else{
      alert("All fields are mandatory");
    }
//---------------------------------------------------------------------------------------------

}

//Login Verification----------------------------------------------------------------------
   let log=document.querySelector("#btn-login_vam");
   log.addEventListener("click",vs);
   function vs(){
     console.log("Signin");
     var cur_user=[];
      let email=document.querySelector("#email_vam").value;
      let pass=document.querySelector("#login-password_vam").value;
      var flag=false;
      user_data.map((elem,i)=>{
       
        if(elem.email==email&&elem.password==pass){
          alert("Login Successful");
          console.log(elem);
          flag=true;
          cur_user.push(elem);
          localStorage.setItem("Current_User",JSON.stringify(cur_user));
          window.location.href="./index.html"
        }
      })
      if(flag==false){
        alert("Invalid Credentials");
      }
   }

  //  welcome signout--------
  let Current_User=JSON.parse(localStorage.getItem("Current_User"));
    function signOut()
  {
    localStorage.removeItem("Current_User");
  }
  
  // signOut();