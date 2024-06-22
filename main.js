
function toggleMenu(){
    const toggleMenu =document.querySelector(".toggleMenu");
    const Navigation =document.querySelector(".Navigation");
    toggleMenu.classList.toggle("active");
    Navigation.classList.toggle("active");
}

function EmailValid(){
    
    let email= document.getElementById('email').value;

let text;
var emailcheak=/^([AZa-z0_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (email.match(emailcheak)){
    
        text= "it's valid";
        document.getElementById('result').style.color='green';
    }
    else{
        text= "not valid ";
        document.getElementById('result').style.color='red';

    }

     if (email == 0)
    {
        text= "please enter email!";
        document.getElementById('result').style.color='red';
    }

document.getElementById('result').innerHTML=text;
}



