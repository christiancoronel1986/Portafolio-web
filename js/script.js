let menuVisible= false;
//funcion que oculta o muestra el menu//
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    //oculta el menu una vez seleccionada una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//funcion para las animaciones de las skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("coreldraw");
        habilidades[3].classList.add("soportetecnico");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}
window.addEventListener("scroll", efectoHabilidades);
//con esto se descarga el archivo pdf al dar click en el boton descargar cv
document.getElementById("download-cv").addEventListener("click", function() {
    window.location.href = '/docs/CV Christian Rodolfo Coronel Galarza.pdf';
    setTimeout(function(){
      window.location.href = '/';
    },2000)
  });
  //con esto se redirige a los proyectos realizados segun en cual se haga click
  document.querySelector("#proyecto1").addEventListener("click", function() {
    window.location.href = "https://demo1-christian-coronel.netlify.app/";
});

document.querySelector("#proyecto2").addEventListener("click", function() {
    window.location.href = "https://demo2-christian-coronel.netlify.app/";
});
document.querySelector("#proyecto3").addEventListener("click", function() {
    window.location.href = "https://reto-1-alura-barberia.web.app/";
});

setTimeout(function(){
    var iframe = document.getElementById("myiframe");
    var button = document.createElement("button");
    button.innerHTML = "Click me";
    iframe.parentNode.insertBefore(button, iframe.nextSibling);
}, 10000);

var iframe = document.getElementById("myiframe");
var video = iframe.contentWindow.document.querySelector("video");

console.log(video.duration);
