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