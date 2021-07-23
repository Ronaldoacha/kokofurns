 let email = document.getElementById("email");
var user = document.getElementById("name");
var description =document.getElementById("description");
var telephone = document.getElementById("telephone");
 


document.getElementById("btn").addEventListener('click', function (ev) {
    if(user.value.length < 3 || email.value.length < 3 || telephone.value.charAt(0) !== '+' || description.value == null){
        alert('invalid information')
    }else{
        sucess(user, email, telephone, description);
    }
    ev.preventDefault()
    document.getElementById('form').reset();
  });
  function sucess(a, b, c, d){
    a.style.border = '2px solid green';
    b.style.border = '2px solid green'
    c.style.border = '2px solid green'
    d.style.border = '2px solid green'
    let userInfo =     {
        username: a.value,
        email: b.value,
        telephone: c.value,
        description: d.value
    }
    console.log(userInfo);
  }



  var cart = document.querySelector("cart-shop");
  var select =document.querySelector(".select");
  var button = document.getElementsByTagName("button");
  for(var but of button){
    but.addEventListener("click", (e)=>{
      var add =Number(cart.getAttribute('data-count') ||0);
      cart.setAttribute('data-count', add +1);
      cart.classList.add('zero')

// image animation to our cart
var image = e.target.parentNode.querySelector('imge')
var span = e.target.parentNode.querySelector('span')
var S_image =image.cloneNode(false);
span.appendChild(S_image);
span.classList.remove("active");
span.removeChild(S_image);


    },500);
var parent = e.target.parentNode;
var clone = parent.cloneNode(true);
select.appendChild(clone);
clone.lastElement.innerText = "Buy-now";

if(clone){
  cart.onclick=()=>{
    select.classList.toggle("display");
  }
}
}



 

 
//  add evnt
// button.addEventListener("input", great()),

// function
// function great(el){
// user.addEventListener("input", great(el))
// if(user.value.length < 3 || user.value.length > 17 || user.value ==null){
//     user.style.border = '2px solid red'
// }else{
//     alert("input your full names")
// }

// }
// function great(el){
//     console.log(user);
//     description.addEventListener("input", great())
//     if(description.value.length < 10 || description.value.length > 17 || description.value ==null){
//         description.style.border = '2px solid red'
//     }else{
//         alert("input your full names")
//     }
//     el.preventDefault();
// }

// cart shop


 