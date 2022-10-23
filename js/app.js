/**
 * Define Global Variables
 *
 */
const min__top = 0;
const max__top = 250;
const ul = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 *
 */
sections.forEach(function (section) {
  const sectionId = section.getAttribute("id");
  const sectionTitle = section.getAttribute("data-nav");
  //Adding links that correspond to the sections ids:
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = `#${sectionId}`;
  link.textContent = sectionTitle;
  //Adding the styles class to the link:
  link.classList.add("menu__link");
  //Changing the default scrolling to a section behavior to have a more smooth animation:
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
  //Addding our fragment to our unordered list:
  li.appendChild(link);
  fragment.appendChild(li);
});
ul.appendChild(fragment);

window.addEventListener("scroll", function () {
  sections.forEach(function (section) {
    const topSection = section.getBoundingClientRect().top;
    const activeLink = ul.querySelector(`a[href="#${section.id}"]`);
    //Checking if the top of the sections are visible in the viewport and adding the active class to both the links and the sections:
    if (topSection > min__top && topSection < max__top) {
      activeLink.classList.add("active-link");
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
});
//The onscroll method is used to use a certain function when the user scrolls:
const btn = document.getElementById("btn");
window.onscroll = function () {
  onScrollFunction();
};
//Detecting if the user started scrolling away from the top to display the button:
function onScrollFunction() {
  if (document.body.scrollTop > 52 || document.documentElement.scrollTop > 52) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
//Adding a function to scroll to the top when the button is clicked:
btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
