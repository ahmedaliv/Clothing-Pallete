// validation script here
const inputs = document.querySelectorAll('input');
const patterns ={
phonenumber: /^\d{11}$/,
username:/^[a-z\d]{5,12}$/i,
email:/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/,
password:/^[A-Z]+(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{7}$/
};
function validate(field , regex) {
if(regex.test(field.value)){
field.className="valid"
}
else{
    field.className="invalid"
}

  
}


inputs.forEach((input)=>{

    input.addEventListener('keyup' , (e)=> {
        validate(e.target ,patterns[e.target.getAttribute('name')])
    })


})



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.show-menu')) {
      var dropdowns = document.getElementsByClassName("nav-barmenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
