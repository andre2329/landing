
var firebaseConfig = {
    apiKey: "AIzaSyCE4-ONFWZOlJReuw0qb4-WWleKkiRSPfs",
    authDomain: "landing-dffe9.firebaseapp.com",
    projectId: "landing-dffe9",
    storageBucket: "landing-dffe9.appspot.com",
    messagingSenderId: "600628151036",
    appId: "1:600628151036:web:adeef8c7bd0bf5c70acd79",
    measurementId: "G-SHKC4N17RS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
var messageRef = firebase.database().ref('mensajes');

// ===Menu show===
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}


showMenu('nav-toggle','nav-menu')
// == Active and remove menu ==
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    // Active link
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => {
    n.addEventListener('click',linkAction)
    
});
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:false
})
/* Scroll Home */
sr.reveal('.home-title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home-img',{delay:400})
sr.reveal('.home-social-icon',{interval:200})
/* Scroll About */
sr.reveal('.about-img',{})
sr.reveal('.about-subtitle',{delay:200})
sr.reveal('.about-text',{delay:400})
/* Scroll Skills */
sr.reveal('.skills-subtitle',{})
sr.reveal('.skills-text',{delay:200})
sr.reveal('.skills-data',{interval:200})
sr.reveal('.skills-img',{delay:400})
/* Scroll Work */
sr.reveal('.work-img',{})
sr.reveal('.work-item',{interval:200})

document.getElementById('contact-form').addEventListener('submit',submitForm)


function submitForm(e){
    e.preventDefault()
    var nombres = getInputValue('nombres')
    var email = getInputValue('email')
    var mensaje = getInputValue('mensaje')

    var newMessageRef = messageRef.push()
    newMessageRef.set({
        nombres:nombres,
        email:email,
        mensaje:mensaje
    })
    var formulario = document.getElementById('contact-container')
    formulario.innerHTML = 'Gracias, en poco tiempo nos pondremos en contacto!'
}
function getInputValue(id){
    return document.getElementById(id).value;
}
function setSkills() {
    
    var skillData = ''
    var skillContainer = document.getElementById('skills-container')
    skills.forEach(el=>{
        var skillName = "<div class='skills-name'>"+
                             "<i class='"+el.icon+" skills-icon'></i>"+
                            "<span class='skills-name'>"+
                                 el.name
                             +"</span>"
                         +"</div>"
        var skillPercentage = "<div>"+
                        "<span class='skills-percentange'>"+el.percentage+"</span>"+
                             "</div>"+
                             "<div class='skills-bar' style='width:"+el.percentage+"'>"+
                         "</div>"
        skillData = skillData+"<div class='skills-data'>"+
        skillName+skillPercentage
        +"</div>"
    })
    skillContainer.innerHTML = skillData
}

setSkills()