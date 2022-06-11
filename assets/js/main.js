/*==================== SHOW OR HIDE MENU ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== SHOW MENU =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== HIDE MENU =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link'); // note: this is not getElementById!

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLink.forEach((link) => link.addEventListener('click', linkAction));

/*==================== SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills-content');
const skillsHeaders = document.querySelectorAll('.skills-header');

function toggleSkills() {
  // first, record the selected class that is clicked
  let selectedClass = this.parentNode.className;

  // make everything hide
  // for (let i = 0; i < skillsContent.length; i++) {
  //   skillsContent[i].className = 'skills-content skills-hide';
  // }

  // if the selected class was hidden --> change it to expand
  // if the selected class was not hidden --> it will be hidden anyway
  if (selectedClass === 'skills-content skills-hide') {
    this.parentNode.className = 'skills-content skills-show';
  } else {
    this.parentNode.className = 'skills-content skills-hide';
  }
}

skillsHeaders.forEach((header) => {
  header.addEventListener('click', toggleSkills);
});
/*==================== EXPERIENCE TABS ====================*/
const expTabs = document.querySelectorAll('[data-target]');
const expContents = document.querySelectorAll('[data-content]');

expTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    expContents.forEach((content) => {
      content.classList.remove('exp-show');
    });
    target.classList.add('exp-show');

    expTabs.forEach((t) => {
      t.classList.remove('exp-show');
    });
    tab.classList.add('exp-show');
  });
});

/*==================== PROJECT SWIPER  ====================*/

let swiper = new Swiper('.project-container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');
    let selector;
    selector =
      sectionId === 'home'
        ? 'a[href*=home]'
        : '.nav-menu a[href*=' + sectionId + ']';
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(selector).classList.add('active-link');
    } else {
      document.querySelector(selector).classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
// TODO: just add it there permanently?
const scrollHeader = () => {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
};

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 500) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
};
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
