const corazon = document.querySelector(".corazon");

corazon.addEventListener("click", animacionCompleta);


// FUNCIÓN PRINCIPAL (solo coordina)
function animacionCompleta(){
    detenerPalpitar();
    encogerCorazon();

    setTimeout(() => {
        explotarCorazon();
        desvanecerCorazon();

        setTimeout(() => {
            mostrarNombre();
        }, 250);
    },150);
}


// DETENER PALPITAR
function detenerPalpitar(){
    corazon.style.animation = "none";
}


// ENCOGER
function encogerCorazon(){
    corazon.classList.add("encoger");
}


// EXPLOSIÓN
function explotarCorazon(){

    const rect = corazon.getBoundingClientRect();

    for(let i=0; i<40; i++){

        const mini = document.createElement("div");
        mini.className = "explode-corazon";

        mini.style.left = rect.left + rect.width/2 + "px";
        mini.style.top = rect.top + rect.height/2 + "px";

        const x = (Math.random()*800 - 400) + "px";
        const y = (Math.random()*800 - 400) + "px";

        mini.style.setProperty('--x', x);
        mini.style.setProperty('--y', y);

        document.body.appendChild(mini);

        setTimeout(()=> mini.remove(), 1800);
    }
}

// DESVANECER CORAZÓN ORIGINAL
function desvanecerCorazon(){
    corazon.style.transition = "opacity 0.5s ease";
    corazon.style.opacity = "0";
}

function mostrarNombre(){
    const nombre =
document.getElementById("nombre");
    nombre.textContent = "Penélope";
    nombre.style.animation = "1";
    nombre.style.animation = "mostrarNombre 1s forwards";

document.body.classList.add("mostrar-estrellas");

setTimeout(() => {
    document.getElementById("mensaje-navegacion").style.display = "block";
    mostrarMensaje();
}, 1000); // espera 1 segundo después de que aparece Penélope

setTimeout(() => {
    crearLluviaCorazones();
}, 500); // medio segundo después de que aparezca el nombre
}

function crearLluviaCorazones(){
    const contenedor = document.querySelector(".lluvia-corazones");

    for(let i=0; i<30; i++){
        const corazon = document.createElement("div");
        corazon.className = "corazon-lluvia";

        const x = Math.random() * window.innerWidth;
        const delay = Math.random() * 5; // inicio aleatorio
        corazon.style.left = x + "px";
        corazon.style.animationDelay = delay + "s";

        contenedor.appendChild(corazon);
    }
}

// LISTA DE MENSAJES
const mensajes = [
    "Gracias por llegar a mi vida",
    "Eres una increíble persona",
    "Me encantan tus ojos",
    "Tu cabello es hermoso",
    "Me haces sonreír cada día"
];

let indiceMensaje = 0;

// FUNCIÓN PARA MOSTRAR MENSAJE
function mostrarMensaje(){
    const span = document.getElementById("mensaje");
    span.textContent = mensajes[indiceMensaje];
}

// FUNCIONES DE BOTONES
document.getElementById("prevMensaje").addEventListener("click", () => {
    indiceMensaje--;
    if(indiceMensaje < 0) indiceMensaje = mensajes.length - 1;
    mostrarMensaje();
});

document.getElementById("nextMensaje").addEventListener("click", () => {
    indiceMensaje++;

    if(indiceMensaje >= mensajes.length){
        indiceMensaje = mensajes.length - 1;
        document.getElementById("mensaje-navegacion").style.display = "none";

        const nombre = document.getElementById("nombre");

        // Desaparece "Penélope"
        nombre.style.transition = "opacity 1s ease";
        nombre.style.opacity = "0";

        // Luego aparece "Te quiero" en el mismo lugar
        setTimeout(() => {
            mostrarTextosFinales()
            nombre.style.opacity = "1";
        }, 1000);

    } else {
        mostrarMensaje();
        sonidoClick.play();
    }
});

// SONIDO AL HACER CLICK
const sonidoClick = new Audio("clic.mp3");

document.getElementById("prevMensaje").addEventListener("click", () => {
    indiceMensaje--;
    if(indiceMensaje < 0) indiceMensaje = mensajes.length - 1;
    mostrarMensaje();
    sonidoClick.play();
});

// --- FUNCION PARA MOSTRAR EL RAMO ---
function mostrarRamo(){
    const ramo = document.getElementById("ramo");
    ramo.style.display = "flex"; // aparecerá en pantalla
    // aquí puedes agregar animación de brisa en CSS
}

// --- FUNCIÓN DE LA BROMA "NEGRA" ---
document.addEventListener("click", () => {
    const broma = document.getElementById("broma");
    broma.style.display = "block";
    broma.style.opacity = "1";
    broma.style.animation = "desaparecer 1.5s forwards";
});

function mostrarRamo(){
    const ramo = document.getElementById("ramo");
    ramo.style.display = "flex"; // aparece el ramo en pantalla
}

const musica = new Audio("musica_fondo.mp3");
musica.loop = true;

document.getElementById("btnMusica").addEventListener("click", () => {
    musica.play();
    document.getElementById("btnMusica").style.display = "none";
});

// TEXTOS FINALES DESPUÉS DE LOS MENSAJES
function mostrarTextosFinales(){

    const textos = [
        "Te quiero Negra💕",
        "Eres una increíble persona✨",
        "Gracias por ser lo que eres.",
        "Y por ser como eres😊",
        "Te admiro mucho por tus ideales😉",
        "Por tus morales✔",
        "Por tu mentalidad de siempre hacer algo productivo",
        "Desde que te conoci, mis dias tienen algo más bonito💖",
        "Tienes una forma de ser que se queda en la mente y el corazón",
        "Me encanta la paz que transmite hablar contigo🥰",
        "Tu simple presencia...",
        "causa un efecto que no sabes que causa",
        "Contigo, las conversaciones simples se sienten especiales",
        "Eres una mezcla de...", 
        "loca trastornada con flojera y fortaleza",
        "Esta pagina no es un simple código", 
        "es cariño convertido en detalles💖",
        "No, en serio, apreciala😢",
        "que no sabes el sufrimiento que pase haciendo esto🤕",
        "Para que la página funcione",
        "Pero al final si se pudo😎🤞✔",
        "Te dedico esta paginita para ti preciosa🌹😘",
        "No es mucho...", 
        "Esta sencillita😓",
        "pero lo hice con mucho esfuerzo y cariño😊🌹",
        "Feliz San Valentin mi amor💕✨🥰",
    ];

    let i = 0;
    const nombre = document.getElementById("nombre");

    nombre.style.animation = "mostrarNombre 1s forwards";

    setInterval(() => {
        nombre.style.opacity = "0";

        setTimeout(() => {
            nombre.textContent = textos[i];
            nombre.style.opacity = "1";
            i++;

            if(i >= textos.length){
                i = 0;
            }

        }, 100);

    }, 3500);
}
