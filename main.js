// full list buton. Toggle classes that allow the button to appear with a fade in, then toggle it off to go back to display
//none.


const seeMoreServicesButton = document.getElementById('full-list-button');
const fullListOfServices = document.getElementById('list-of-services');


seeMoreServicesButton.addEventListener('click', showList);

function showList() {
    this.classList.toggle("list-active");
    fullListOfServices.classList.toggle("show");
    fullListOfServices.classList.toggle("fadeInUp");
}

// Fade in the services elements
var animateHTML = function() {
    var elements;
    var windowHeight;
    function init() {
        //  All of the rows have a class hidden which gives them opacity 0
        //  Select all of those elements
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
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
      for (var i = 0; i < elements.length; i++) {
        //  getBoundingClientRect returns the size of the element and its position relative to the viewport
        //  so basically, look how far the element is from the top of the viewport, if it gets close in view 
        //  add the fade in animation
        var positionFromTop = elements[i].getBoundingClientRect().top;
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