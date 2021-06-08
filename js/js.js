const button= document.querySelectorAll(".btt"); 
const section=document.querySelector('section');
button[0].addEventListener('click',function(){
    section.style.backgroundImage='url("./images/1.jpg")';
    button[1].style.opacity="0.5";  
    button[0].style.opacity="1";

    button[2].style.opacity="0.5";
})
button[1].addEventListener('click',function(){
    section.style.backgroundImage='url("./images/2.jpg")';

    button[1].style.opacity="1";
    button[0].style.opacity="0.5";
    button[2].style.opacity="0.5";
    });
button[2].addEventListener('click',function(){
        section.style.backgroundImage='url("./images/3.jpg")';
    
        button[2].style.opacity="1";
        button[1].style.opacity="0.5";
        button[0].style.opacity="0.5";
        });

        ///////end buttons js/////////


    
     


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