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

var sidemenu= document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyFa6Yer9f_584gKFqcMQMCjFZCcz5w3gSsFCY_SUOCKVlxgCGMuibMACLSejma5_-jsw/exec'
  const form = document.forms['submit-to-google-sheet']
   const msg=document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var loader= document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display= "none";
})
const observer= new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

const observer1= new IntersectionObserver((entries1)=>{
  entries1.forEach((entry1)=>{
    console.log(entry1)
    if(entry1.isIntersecting){
      entry1.target.classList.add('show1');
    }else{
      entry1.target.classList.remove('show1');
    }
  });
});
const hiddenElements1=document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el)=> observer1.observe(el));