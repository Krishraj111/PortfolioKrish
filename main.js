// For nav bar
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('#header, #about, #skills, #services, #project, #contact'); // Include all sections
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to set the active link
    function setActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            // Add a small offset for the header section
            if (sectionId === 'header') {
                if (pageYOffset < sectionTop + sectionHeight - 100) {
                    current = sectionId;
                }
            } 
            // Check if the Skills section is in view
            else if (sectionId === 'skills') {
                if (pageYOffset >= sectionTop - sectionHeight / 2 && pageYOffset < sectionTop + sectionHeight / 2) {
                    current = sectionId;
                }
            } 
            // Default logic for other sections
            else if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    // Set Home as active by default on page load
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#header') {
            link.classList.add('active');
        }
    });

    // Update active link on scroll
    window.addEventListener('scroll', setActiveLink);
});



// for scrolling animations
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for section effects
  const sections = document.querySelectorAll('section, #about, #skills, #services, #project, #contact');
  
  // Hide sections initially (excluding the header)
  sections.forEach(section => {
      section.style.opacity = '0';
      section.style.visibility = 'hidden';
  });
  
  const observerOptions = {
      root: null, // observing relative to the viewport
      rootMargin: '0px',
      threshold: 0.5 // trigger when 50% of the section is visible
  };

  const observerCallback = function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('active')) {
              // Add a class to apply effects only once
              entry.target.classList.add('active');
              entry.target.style.opacity = '1';
              entry.target.style.visibility = 'visible';
              observer.unobserve(entry.target); // Stop observing once animated
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
      observer.observe(section);
  });

  // Ensure the header is always visible
  const header = document.querySelector('#header');
  if (header) {
      header.style.opacity = '1';
      header.style.visibility = 'visible';
  }

  // Function to handle navigation clicks
  document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);

          if (targetSection) {
              // Temporarily disable the Intersection Observer
              observer.disconnect();

              // Scroll to the target section
              targetSection.scrollIntoView({ behavior: 'smooth' });

              // Ensure only the target section is animated
              sections.forEach(section => {
                  if (section !== targetSection) {
                      section.style.opacity = '0';
                      section.style.visibility = 'hidden';
                      section.classList.remove('active');
                  }
              });

              // Animate the target section if it hasn't been animated yet
              if (!targetSection.classList.contains('active')) {
                  targetSection.classList.add('active');
                  targetSection.style.opacity = '1';
                  targetSection.style.visibility = 'visible';
              }

              // Re-enable the Intersection Observer after a short delay
              setTimeout(() => {
                  sections.forEach(section => {
                      observer.observe(section);
                  });
              }, 500); // Adjust the delay as needed
          }
      });
  });

  // // Ensure the home section is animated on page load
  const homeSection = document.querySelector('section, #header');
  if (homeSection) {
      homeSection.style.opacity = '1';
      homeSection.style.visibility = 'visible';
      homeSection.classList.add('active');
      observer.unobserve(homeSection); // Stop observing once animated
  }
});



/* for the paragragh typing in about me*/
var typed = new Typed(".para1", {
  strings: ["🌟Work hard in silence, let success make the noise.🌟"],
  typeSpeed: 20,
  loop: false,
  showCursor: false,
});


/* for the job role typing in home page*/
var typed = new Typed(".text", {
    strings: ["Full Stack Web Developer", "Software Engineer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: false,
});

/* for the paragragh typing in about me*/
var typed = new Typed(".para", {
    strings: ["I am Krish Raj, a B.Tech CSE student at LPU with a passion for full-stack development and problem-solving. Skilled in C++, JavaScript, React, Node.js, and MongoDB, I have built projects like a bakery website and a phonebook system using efficient DSA techniques. I hold certifications in DevOps, PHP, and Ethical Hacking, and I’m actively preparing for opportunities in software development and DevOps."],
    typeSpeed: 5,
    loop: false,
    showCursor: false,
});



/*for tab-link */
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
             tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
             tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        
    }

// Open the "Education" tab by default when the page loads
window.onload = function () {
    document.getElementsByClassName("tab-links")[0].classList.add("active-link");
    document.getElementById("education").classList.add("active-tab");
};


/* for small screen menu bar */
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

/*contact details*/

/* contact details */

/* contact details */

const scriptURL = 'https://script.google.com/macros/s/AKfycbxa4-muh-_u3nh58DsykcN7_SdTDxWCLMdGkJnD3nV95NOpQJtyNT3Mh4AbSezjB0nITA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show the alert message immediatelys
  msg.innerHTML = "Message sent successfully!";

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function(){
        msg.innerHTML = "";
        form.reset();
      }, 10);
    })
    .catch(error => console.error('Error!', error.message));
});



