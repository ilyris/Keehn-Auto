// full list buton. Toggle classes that allow the button to appear with a fade in, then toggle it off to go back to display
//none.


const seeMoreServicesButton = document.getElementById('full-list-button');
const fullListOfServices = document.getElementById('list-of-services');
let slideIndex = 1;
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next")

previousButton.addEventListener("click", console.log(123), moveContent(-1) );
nextButton.addEventListener("click", console.log(123), moveContent(1) );


seeMoreServicesButton.addEventListener('click', showList);

function showList() {
    // this.classList.toggle("list-active");
    if(this.classList.contains("list-active")){
      fullListOfServices.classList.remove("fadeInDown")
      fullListOfServices.classList.add("fadeOutUp");
      this.classList.toggle("list-active");
      setTimeout(() => {
        fullListOfServices.classList.toggle("show");
      }, 300);
    } else {
      this.classList.toggle("list-active");
      fullListOfServices.classList.toggle("show");
      fullListOfServices.classList.add("fadeInDown");
      fullListOfServices.classList.remove("fadeOutUp");
    }
}

// Fade in the services elements
const animateHTML = function() {
  const elements = document.querySelectorAll('.hidden');
  const windowHeight = window.innerHeight;
    function init() {
        //  All of the rows have a class hidden which gives them opacity 0
        //  Select all of those elements
      // const elements = document.querySelectorAll('.hidden');
      // const windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    //  Eventlisteners that get called when scrolling down
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    // See where the element is in the viewport to decide if we want to fade it in
    function checkPosition() {
      for (let i = 0; i < elements.length; i++) {
        //  getBoundingClientRect returns the size of the element and its position relative to the viewport
        //  so basically, look how far the element is from the top of the viewport, if it gets close in view 
        //  add the fade in animation
        let positionFromTop = elements[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elements[i].className = elements[i].className.replace(
            'hidden',
            'fade-in-element'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init(); 

    



  console.log(slideIndex);
  showContent(slideIndex);

  function moveContent(x) {
    showContent(slideIndex += x);
  }
  function showContent(x) {
    const slideContainer = document.getElementsByClassName("slide-container");
    if(x > slideContainer.length) {
      slideIndex = 1;
    }
    if(x < 1) { 
      slideIndex = slideContainer.length
    }
      for(let i = 0; i < slideContainer.length; i++) {
        slideContainer[i].style.display = "none";

      }
      slideContainer[slideIndex-1].style.display = "block";
    }  


 
  


