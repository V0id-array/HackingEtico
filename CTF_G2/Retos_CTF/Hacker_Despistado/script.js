function verificarContraseña() {
    let contraseñaIngresada = document.getElementById("password").value;
    let contraseñaCorrecta = "secreta123"; // Contraseña oculta en el código fuente

    if (contraseñaIngresada === contraseñaCorrecta) {
        document.getElementById("mensaje").innerHTML = "✅ Acceso concedido.";
        document.getElementById("fase1").style.display = "none";
        document.getElementById("fase2").style.display = "block";

        // Cambiar el título y descripción al pasar a la fase 2
        document.getElementById("titulo").textContent = "🚨 Sistema Vulnerado";
        document.getElementById("descripcion").textContent = "¡Has accedido al sistema! Pero hay algo extraño... Parece que el atacante dejó un fallo grave en la seguridad.";

        // Cambiar el texto dentro de la fase 2 para mayor inmersión
        document.getElementById("textoFase2").innerHTML = 
            "Parece que hay un error en la configuración de la seguridad. Si exploras por el navegador, quizás puedas ejecutar un comando especial para activarlo.<br><br>";

        console.log("Usa la consola del navegador y ejecuta `hackear....()` para avanzar.");
    } else {
        document.getElementById("mensaje").innerHTML = "Contraseña incorrecta. Inténtalo de nuevo.";
    }
}

function verificarVictoria() {
    let d1 = document.getElementById("d1").classList.contains("fallen");
    let d2 = document.getElementById("d2").classList.contains("fallen");
    let d3 = document.getElementById("d3").classList.contains("fallen");

    if (d1 && d2 && d3) {
        const _0x53f633=_0x1153;(function(_0x2e535b,_0x4c4f71){const _0x37e5c1=_0x1153,_0x316758=_0x2e535b();while(!![]){try{const _0x53a608=-parseInt(_0x37e5c1(0xf8))/0x1+-parseInt(_0x37e5c1(0xf9))/0x2+parseInt(_0x37e5c1(0xf2))/0x3*(-parseInt(_0x37e5c1(0xfa))/0x4)+-parseInt(_0x37e5c1(0xf4))/0x5+-parseInt(_0x37e5c1(0xfb))/0x6+-parseInt(_0x37e5c1(0xf7))/0x7*(parseInt(_0x37e5c1(0xf5))/0x8)+parseInt(_0x37e5c1(0xf3))/0x9*(parseInt(_0x37e5c1(0xf1))/0xa);if(_0x53a608===_0x4c4f71)break;else _0x316758['push'](_0x316758['shift']());}catch(_0x3fd596){_0x316758['push'](_0x316758['shift']());}}}(_0x5288,0x55ba1));function _0x1153(_0x5a9f29,_0x499002){const _0x528854=_0x5288();return _0x1153=function(_0x1153b5,_0x27ce6a){_0x1153b5=_0x1153b5-0xf1;let _0x2eeae9=_0x528854[_0x1153b5];return _0x2eeae9;},_0x1153(_0x5a9f29,_0x499002);}function _0x5288(){const _0x5ec758=['RkxBR3tvb3BzX0hUTUxfZmVsbF9pbnRvX3Byb2dyYW1taW5nfQ==','1864569rrVrww','431267uGnkvX','1107704dgQBrN','524LzJAof','2399358HaQMkr','210SollxN','7212KDHvpA','1182807gWQQkv','880380xLXydf','16pTLuVL'];_0x5288=function(){return _0x5ec758;};return _0x5288();}let flagReal=atob(_0x53f633(0xf6));
        document.getElementById("flag").innerHTML = "🎉 ¡Has ganado! FLAG: <b>" + flagReal + "</b>";
    }
}

// El usuario tiene que encontrar esto en la consola y ejecutarlo manualmente:
window.hackearSistema = function() {
    document.getElementById("d1").classList.add("fallen");
    document.getElementById("d2").classList.add("fallen");
    document.getElementById("d3").classList.add("fallen");
    verificarVictoria();
};

console.log("Puede que en  código fuente la contraseña para entrar.");