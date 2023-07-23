var MyNinjaApp = angular.module('MyNinjaApp',['ngRoute', 'ngAnimate']);

MyNinjaApp.config(['$routeProvider', function($routeProvider){

$routeProvider
    .when('/content', {
      templateUrl: 'registration_form.html',
      controller: 'RController'
    })

    .when('/form', {
      templateUrl: 'new_reg.html',
      controller: 'RController'
    })

    .when('/registration-success', {
      templateUrl: 'login_page.html',
      controller: 'RController'
    })

    .when('/forgot', {
      templateUrl: 'forgot_password.html',
      controller: 'RController'
    })

    .when('/login', {
      templateUrl: 'loin_page.html',
      controller: 'RController'
    })


}])

MyNinjaApp.controller('RController', ['$scope', '$location', function($scope, $location){

  $scope.sendMessage = function(){
    $location.path('/registration-success');
  }
}]);


function registration()
{
    let fullname = document.getElementById("fullname").value;
    let username = document.getElementById("uname").value;
    let email = document.getElementById("uemail").value;
    let number = document.getElementById("unumber").value;
    let fname = document.getElementById("ufname").value;
    let mname = document.getElementById("umname").value;
    let lastschool = document.getElementById("lastschool").value;
    let lastcollege = document.getElementById("lastclg").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("pass").value;
    let cpassword = document.getElementById("cpass").value;
    let radio1 = document.getElementById("dot-1");
    let radio2 = document.getElementById("dot-2");
    let sbox = document.getElementById("selectbox");
    
    let a=0;
    let b=0;
    let c=0;
    let d=0;
    let e=0;
    let f=0;
    let g=0;
    let h=0;
    let i=0;
    let j=0;
    let k=0;
    let l=0;
    let text;
    let boxvalue;
    

    if(fullname.length<3)
    {
        text = "Please Enter valid Name";
    document.getElementById('e_name').innerHTML = text
    document.getElementById('fullname').style.borderColor = "red";
    }
    else if(fullname.length >=3)
  {
    text = "";
    document.getElementById('e_name').innerHTML = text
    document.getElementById('fullname').style.borderColor = "green";
    a=1;
  }

  if(username.length<3)
  {
      text = "Please Enter valid User Name";
  document.getElementById('e_uname').innerHTML = text
  document.getElementById('uname').style.borderColor = "red";
  }
  else if(username.length >=3)
{
  text = "";
  document.getElementById('e_uname').innerHTML = text
  document.getElementById('uname').style.borderColor = "green";
  b=1;
}


  if(email.indexOf("@") == -1 || email.length < 4)
  {
    text = "Please Enter valid Email";
    document.getElementById('e_uemail').innerHTML = text
    document.getElementById('uemail').style.borderColor = "red";
    
  }
  else if(email.indexOf("@") == 1 && email.length > 4)
  {
    text = "";
    document.getElementById('e_uemail').innerHTML = text
    document.getElementById('uemail').style.borderColor = "green";
    c=1;
  }


  if(number.length<10 || number.length>10)
  {
      text = "Please Enter valid phonenumber";
  document.getElementById('e_unumber').innerHTML = text
  document.getElementById('unumber').style.borderColor = "red";
  }
  else if(number.length ==10)
{
  text = "";
  document.getElementById('e_unumber').innerHTML = text
  document.getElementById('unumber').style.borderColor = "green";
  d=1;
}


if(fname.length<3)
  {
      text = "Please Enter valid Father Name";
  document.getElementById('e_ufname').innerHTML = text
  document.getElementById('ufname').style.borderColor = "red";
  }
  else if(fname.length >=3)
{
  text = "";
  document.getElementById('e_ufname').innerHTML = text
  document.getElementById('ufname').style.borderColor = "green";
  e=1;
}

if(mname.length<3)
  {
      text = "Please Enter valid Mother Name";
  document.getElementById('e_umname').innerHTML = text
  document.getElementById('umname').style.borderColor = "red";
  }
  else if(mname.length >=3)
{
  text = "";
  document.getElementById('e_umname').innerHTML = text
  document.getElementById('umname').style.borderColor = "green";
  f=1;
}

if(lastschool.length<3)
  {
      text = "Please Enter valid School Name";
  document.getElementById('e_lastschool').innerHTML = text
  document.getElementById('lastschool').style.borderColor = "red";
  }
  else if(lastschool.length >=3)
{
  text = "";
  document.getElementById('e_lastschool').innerHTML = text
  document.getElementById('lastschool').style.borderColor = "green";
  g=1;
}


if(lastcollege.length<3)
  {
    text = "Please Enter valid College Name";
  document.getElementById('e_lastclg').innerHTML = text
  document.getElementById('lastclg').style.borderColor = "red";
  }
  else if(lastcollege.length >=3)
{
  text = "";
  document.getElementById('e_lastclg').innerHTML = text
  document.getElementById('lastclg').style.borderColor = "green";
  h=1;
}


if(address.length<10)
  {
      text = "Please Enter valid Address";
  document.getElementById('e_address').innerHTML = text
  document.getElementById('address').style.borderColor = "red";
  }
  else if(address.length >=10)
{
  text = "";
  document.getElementById('e_address').innerHTML = text
  document.getElementById('address').style.borderColor = "green";
  i=1;
}


if(password.length<8)
  {
    text = "Please Enter valid password (greater than 8 characters)";
    document.getElementById('e_pass').innerHTML = text
    document.getElementById('pass').style.borderColor = "red";
    
  }
  else if(!(password.length<8))
  {
    text = "";
    document.getElementById('e_pass').innerHTML = text
    document.getElementById('pass').style.borderColor = "green";
    j=1;
  }
  if(cpassword!=password || cpassword.length<8)
  {
    text = "Passwords do not match";
    document.getElementById('e_cpass').innerHTML = text
    document.getElementById('cpass').style.borderColor = "red";
    
  }
  else if(cpassword==password)
  {
    text = "";
    document.getElementById('e_cpass').innerHTML = text
    document.getElementById('cpass').style.borderColor = "green";
    k=1;
  }

  if(radio1.checked!=true &&  radio2.checked==true)
  {
    text="";
    document.getElementById("e_radio").innerHTML=text
    l=1;
    }
    else if(radio1.checked==true &&  radio2.checked!=true)
    {
        text="";
        document.getElementById("e_radio").innerHTML=text
        l=1;
    }
    else
    {
        text="Please select a gender";
        document.getElementById("e_radio").innerHTML=text
    }
    
// boxvalue=sbox.options[sbox.selectedIndex].value;
// if (boxvalue!="COMPUTER SCIENCE ENGINEERING" && boxvalue!="ELECTRONIC AND COMMUNICATION ENGINEERING" && boxvalue!="ELECTRICAL AND ELECTRONICS ENGINEERING" && boxvalue!="MECHANICAL ENGINEERING" && boxvalue!="CIVIL ENGINEERING" && boxvalue!="AEROSPACE ENGINEERING" && boxvalue!="CHEMICAL ENGINEERING" )
// {
//     text="Please select a branch";
//     document.getElementById("e_selectbox").innerHTML=text
// }
// else 
// {
//     text="";
//         document.getElementById("e_selectbox").innerHTML=text
//     m=1;
// }


  if(a==1 && b==1 && c==1 && d==1 && e==1 && f==1 && g==1 && h==1 && i==1 && j==1 && k==1 && l==1)
  {
    alert("Regisration Successfull!");
    return true;
   
  }
  else
  {
    return false;
  }

}

function forgetpassword()
{
  let forgotpass=document.getElementById("forgot").value;
  let a=0;
  if(forgotpass.indexOf("@") == -1 || forgotpass.length < 4)
  {
    //Want to add color to the below text
    text = "Please Enter valid Email";
    document.getElementById('e_forgot').innerHTML = text
    document.getElementById('forgot').style.borderColor = "red";
    
  }
  else if(forgotpass.indexOf("@") == 1 && forgotpass.length > 4)
  {
    text = "";
    document.getElementById('e_forgot').innerHTML = text
    document.getElementById('forgot').style.borderColor = "green";
    a=1;
  }

  if (a==1)
  {
    alert("A link has been sent your email id mentioned above to reset your password.");
    return true;
  }
  else
  return false;
}

function loginpage()
{
  let luser=document.getElementById("login_user_name").value;
  let lpass=document.getElementById("loginpass").value;
  let a=0;
  let b=0;
  
  if(luser.length<3)
  {
    //Change color of the below text
    text = "Please Enter valid User Name";
  document.getElementById('e_login_user_name').innerHTML = text
  //document.getElementById('login_user_name').style.borderColor = "red";
  }
  else if(luser.length >=3)
{
  text = "";
  document.getElementById('e_login_user_name').innerHTML = text
  //document.getElementById('login_user_name').style.borderColor = "green";
  b=1;
}

if(lpass.length<8)
  {
    text = "Please Enter valid password (greater than 8 characters)";
    document.getElementById('e_loginpass').innerHTML = text
    //document.getElementById('loginpass').style.borderColor = "red";
    
  }
  else if(!(lpass.length<8))
  {
    text = "";
    document.getElementById('e_loginpass').innerHTML = text
    //document.getElementById('loginpass').style.borderColor = "green";
    a=1;
  }

  if(a==1 && b==1)
  {
    alert("Successfully Logged-In!")
    return true;
  }
  else
  return false;
}

