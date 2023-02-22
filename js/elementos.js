let ataquejugador 
let ataqueenemigo
let candado = false
let njugador
let nenemigo
let cvidaj = 6
let cvidan = 6
let counter = 0
let jvida = document.getElementById("vidajugador")
let nvida = document.getElementById("vidaenemigo")
let logSection = document.querySelector("#logs")
let sectionlogs = document.getElementById("logs")
let plogs = document.createElement("p")
let botonseleccion = document.getElementById("botonpeleador")
let botonfuego = document.getElementById("afuego")
botonfuego.disabled = true
let botonagua = document.getElementById("aagua")
botonagua.disabled = true
let botontierra = document.getElementById("atierra")
botontierra.disabled = true
let botonreset = document.getElementById("breset")

function iniciarJuego() {
    selecciondeataques.style.display='none';
    superlogs.style.display='none';
    breset.style.display='none';
    botonseleccion.addEventListener("click",seleccionarjugador)
    botonfuego.addEventListener("click",ataquefuego)
    botonagua.addEventListener("click",ataqueagua)
    botontierra.addEventListener("click",ataquetierra)
    botonreset.addEventListener("click",reiniciador) 
}
function showInfo(info) {
    document.getElementById("descripciones").innerHTML = info;
}
function seleccionarjugador() {
    let imputgregorio = document.getElementById("gregorio")
    let imputcamaron = document.getElementById("camaron")
    let imputshotaro = document.getElementById("shotaro")
    let spanjugadornaco = document.getElementById("jugadornaco")
    if (imputgregorio.checked) {
        candado = true, alert("seleccionaste a gregorio"), spanjugadornaco.innerText = "GREGORIO", njugador = "GREGORIO"
    }
    else if (imputcamaron.checked) {
        candado = true, alert("seleccionaste a camaron" ), spanjugadornaco.innerText  = "CAMARON", njugador = "CAMARON"
    }
    else if (imputshotaro.checked) {
        candado = true, alert("seleccionaste a shotaro" ), spanjugadornaco.innerText  = "SHOTARO", njugador = "SHOTARO"
    }
    else {
        candado = false, 
        alert("selecciona uno de los 3 pendejo")
    }
    if (candado == true) {
        selecciondenacos.style.display='none';
        botonfuego.disabled = false
        botonagua.disabled = false
        botontierra.disabled = false
    }
    seleccionarenemigo();
}
function seleccionarenemigo() {
    let senemigo = aleatorio(1,3)
    let spanenemigonaco = document.getElementById("enemigonaco")
    if (candado == false) {
        spanenemigonaco.innerText = "..."
    }
    else if (senemigo == 1) {
        spanenemigonaco.innerText = "GREGORIO", nenemigo = "GREGORIO"
    }
    else if (senemigo == 2) {
        spanenemigonaco.innerText = "CAMARON", nenemigo = "CAMARON"
    }
    else if (senemigo == 3) {
        spanenemigonaco.innerText = "SHOTARO", nenemigo = "SHOTARO"
    }
    if (candado == true) {
        selecciondeataques.style.display='block';
        superlogs.style.display='block';
        descripciones1.style.display='none';
    }
}
function ataqueenemigof() {
    let aenemigo = aleatorio(1,3)
    if (aenemigo == 1) {
        ataqueenemigo = "FUEGO 🔥"
    }
    else if (aenemigo == 2) {
        ataqueenemigo = "AGUA 💧"
    }
    else if (aenemigo == 3) {
        ataqueenemigo = "TIERRA 🌵"
    }
}
function ataquefuego() {
    if (candado == true) {
        ataquejugador = "FUEGO 🔥"
        ataqueenemigof();
        resultados();
    }
}
function ataqueagua() {
    if (candado == true) {
        ataquejugador = "AGUA 💧"
        ataqueenemigof();
        resultados();
    }
}
function ataquetierra() {
    if (candado == true) {
        ataquejugador = "TIERRA 🌵"
        ataqueenemigof();
        resultados();
    }
}
//CAMARON SE TRABO ACA
function poroptimizar(){
    if (candado == true) {
        ataquejugador = "FUEGO 🔥"
        ataqueenemigof();
        resultados();
    }
}   
function especialidadjugador() {
    if (njugador == "SHOTARO" && ataquejugador == "FUEGO 🔥" && ataqueenemigo == "TIERRA 🌵") { 
            cvidan = cvidan -2
            nvida.innerHTML = cvidan    
    }
    else if (njugador == "GREGORIO" && ataquejugador == "TIERRA 🌵" && ataqueenemigo == "AGUA 💧") { 
            cvidan = cvidan -2
            nvida.innerHTML = cvidan
    }
    else if (njugador == "CAMARON" && ataquejugador == "AGUA 💧" && ataqueenemigo == "FUEGO 🔥") { 
                cvidan = cvidan -2
                nvida.innerHTML = cvidan
    }
    else {
        cvidan--
        nvida.innerHTML = cvidan
    }   
}
function especialidadenemigo() {
    if (nenemigo == "SHOTARO" && ataquejugador == "TIERRA 🌵" && ataqueenemigo == "FUEGO 🔥") { 
            cvidaj = cvidaj -2
            jvida.innerHTML = cvidaj
    }

    else if (nenemigo == "GREGORIO" && ataquejugador == "AGUA 💧" && ataqueenemigo == "TIERRA 🌵") { 
            cvidaj = cvidaj -2
            jvida.innerHTML = cvidaj
    }
    else if (nenemigo == "CAMARON" && ataquejugador == "FUEGO 🔥" && ataqueenemigo == "AGUA 💧") { 
            cvidaj = cvidaj -2
            jvida.innerHTML = cvidaj
    }
    else {
        cvidaj--
        jvida.innerHTML = cvidaj
    }          
}
function crearlogs() {
let plogs = document.createElement("p")
plogs.innerText = "Tu naco " + njugador + " ataco 💨 con " + ataquejugador + " 🚨.....🚨.....🚨 El " + nenemigo + " enemigo te ataco 💨 con " + ataqueenemigo
sectionlogs.appendChild(plogs);
}
function resultados() {
    if (candado == false) {
        plogs.innerText = "..."
    }
    else {
        crearlogs()
        plogs = document.createElement("p")
    }
    if (ataquejugador == ataqueenemigo) {
        plogs.innerText = "El ataque de tu " + njugador + " se 💥 destruyo 💥 con el golpe del " + nenemigo + " enemigo"
    }
    else if (ataquejugador == "FUEGO 🔥" && ataqueenemigo == "TIERRA 🌵" ) {
        especialidadjugador()
        plogs.innerText = "El golpe de tu " + njugador + " 🌋 achicharro 🌋 el ataque del " + nenemigo + " enemigo"
    }
    else if (ataquejugador == "FUEGO 🔥" && ataqueenemigo == "AGUA 💧") {
        especialidadenemigo()
        plogs.innerText = "El ataque de tu " + njugador + " fue 🧯 apagado 🧯 por el golpe del " + nenemigo + " enemigo"
    }    
    else if (ataquejugador == "AGUA 💧" && ataqueenemigo == "FUEGO 🔥" ) {
        especialidadjugador()
        plogs.innerText = "El ataque de tu " + njugador + " 🧯 apago 🧯 el golpe del " + nenemigo + " enemigo"
    }
    else if (ataquejugador == "AGUA 💧" && ataqueenemigo == "TIERRA 🌵") {
        especialidadenemigo()
        plogs.innerText = "El ataque de tu " + njugador + " fue 🌱 absorbido 🌱 por el ataque del " + nenemigo + " enemigo"
    }
    else if (ataquejugador == "TIERRA 🌵" && ataqueenemigo == "AGUA 💧" ) {
        especialidadjugador()
        plogs.innerText = "El ataque de tu " + njugador + " 🌱 absorbió 🌱 el ataque del " + nenemigo + " enemigo"
    }
    else if (ataquejugador == "TIERRA 🌵" && ataqueenemigo == "FUEGO 🔥" ) {
        especialidadenemigo()
        plogs.innerText = "El golpe de tu " + njugador + " fue 🌋 achicharrado 🌋 por el ataque del " + nenemigo + " enemigo"
    }
    sectionlogs.appendChild(plogs)
    revisarvidas()
    contador1()
    
}
function revisarvidas() {
    if (cvidaj <= 0) {
        breset.style.display='block';
        plogs.innerText = "😢😖EL" + nenemigo + " ENEMIGO TE DESTROSO POR NOOB ... APACHURRALE AL RESTART PARA JUGAR OTRA VES!😖😢"
        sectionlogs.appendChild(plogs);
        contador1()
        candado = false
    }
    else if (cvidan <= 0) {
        breset.style.display='block';
        plogs.innerText = "🎉🎈GANASTE CON AYUDA DE TU " + njugador + " ... APACHURRALE AL 🏓RESTART🏓 PARA JUGAR OTRA VES!🎈🎉"
        sectionlogs.appendChild(plogs);
        contador1()
        candado = false
    }
    
}
function reiniciador() {
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function contador1() {
    counter++
    if (counter > 4) {
        logSection.removeChild(logSection.firstChild);
        logSection.removeChild(logSection.firstChild);
    }
}
iniciarJuego()