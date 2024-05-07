const aboutSection = document.getElementById('about');
const topicHeading = document.getElementById('sub-title');
const infoSection = document.getElementById('info');


const serviceSection = document.getElementById('services');
const serviceHeading = document.getElementById('sub-title-service');

const contactSection = document.getElementById('contact');
const contactHeading = document.getElementById('contact-left');

const workSection = document.getElementById("portfolio");
const workHeading = document.getElementById("sub-title-portfolio");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            topicHeading.style.animation = "topSideAni 1s ease forwards";
            serviceHeading.style.animation = "topSideAni 1.3s ease forwards";
            contactHeading.style.animation = "rightSideAni 1.3s ease forwards";
            infoSection.style.opacity = "0";
            workHeading.style.animation = "topSideAni 1.3s ease forwards";
            setTimeout(() => {
                infoSection.style.animation = "rightSideAni 1.5s ease forwards";
            }, 1000);
        } else {
            workHeading.style.animation = "none";
            contactHeading.style.animation = "none";
            topicHeading.style.animation = "none";
            serviceHeading.style.animation = "none";
            infoSection.style.animation = "none"; // Remove animation if not intersecting
        }
    });
}, { threshold: 0.5 }); // Trigger animation when at least 50% of the section is in view

observer.observe(aboutSection);
observer.observe(serviceSection);
observer.observe(contactSection);
observer.observe(workSection);

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


var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyc7owjO0HB4A0edv4sgmexDebZNJ7mNB_0T1KAoqLCCdb7ENWuHM9zbAvCVR58gfyXbQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})




