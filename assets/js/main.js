/*==================== SHOW OR HIDE MENU ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== SHOW MENU =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== HIDE MENU =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link"); // note: this is not getElementById!

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((link) => link.addEventListener("click", linkAction));

/*==================== SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills-content");
const skillsHeaders = document.querySelectorAll(".skills-header");

function toggleSkills() {
  // first, record the selected class that is clicked
  let selectedClass = this.parentNode.className;
  console.log(selectedClass);

  // make everything hide
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-hide";
  }

  // if the selected class was hidden --> change it to expand
  // if the selected class was not hidden --> it will be hidden anyway
  if (selectedClass === "skills-content skills-hide") {
    this.parentNode.className = "skills-content skills-show";
  }
}

skillsHeaders.forEach((header) => {
  header.addEventListener("click", toggleSkills);
});
/*==================== EXPERIENCE TABS ====================*/
const expTabs = document.querySelectorAll("[data-target]");
const expContents = document.querySelectorAll("[data-content]");

expTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    expContents.forEach((content) => {
      content.classList.remove("exp-show");
    });
    target.classList.add("exp-show");

    expTabs.forEach((t) => {
      t.classList.remove("exp-show");
    });
    tab.classList.add("exp-show");
  });
});

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
