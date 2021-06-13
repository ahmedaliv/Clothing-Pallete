const section=document.querySelector('section');
const backimages=['./images/1.jpg' , './images/2.jpg', './images/3.jpg']
let timeout=3000;
let bimgconter=0;
function changer() {
  setInterval(() => {
    
    let url;

          if(bimgconter!==backimages.length){
            url= "background-image: url(\"" + backimages[bimgconter] +"\");";
            section.setAttribute('style' , url)
            bimgconter++;
          }
          else {
            bimgconter=0;
            url= "background-image: url(\"" + backimages[bimgconter] +"\");";
            section.setAttribute('style' , url)



          }

        
    
    }, timeout)
}
document.addEventListener('DOMContentLoaded' , changer())

     


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
          const forward=document.querySelector('.BUTFOR button');
          const back=document.querySelector('.BUTback button');
          let i=0

          let url= "background-image: url(\"" + backimages[i] +"\");";

          forward.addEventListener('click', function chbgim(){
            if(section.getAttribute('style')==null || i==0){
              i++;
              url= "background-image: url(\"" + backimages[i] +"\");";
            section.setAttribute('style' , url)
            
            }
            else if(i==1){
              i++;

             url= "background-image: url(\"" + backimages[i] +"\");";
             section.setAttribute('style' , url)
            }

            else if(i==2 ) {
              i=0;
             url= "background-image: url(\"" + backimages[i] +"\");";
           section.setAttribute('style' , url);
              
            }


          
          })
          back .addEventListener('click' , function chbgim2() {
            if(section.getAttribute('style')==null || i==0){
              i+=2;
              url= "background-image: url(\"" + backimages[i] +"\");";
            section.setAttribute('style' , url)
            
            }
            else if(i==2){
              i--;

             url= "background-image: url(\"" + backimages[i] +"\");";
             section.setAttribute('style' , url)
            }
            else if(i==1 ) {
              i=0;
             url= "background-image: url(\"" + backimages[i] +"\");";
           section.setAttribute('style' , url);
              
            }

          })
