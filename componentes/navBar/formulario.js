let formulario = document.createElement('section');
formulario.className = "Formulario";

let tituloFor = document.createElement('h2');
tituloFor.innerText = "Contactar";
formulario.appendChild(tituloFor);

let cuadro1 = document.createElement('div');
cuadro1.className = "cuadro1";
formulario.appendChild(cuadro1);

let cuadro2 = document.createElement('div');
cuadro2.className = "cuadro2";
formulario.appendChild(cuadro2);

let cuadro3 = document.createElement('div');
cuadro3.className = "cuadro3";
formulario.appendChild(cuadro3);

let btnEnviar = document.createElement('div');
btnEnviar.innerText = "enviar"
btnEnviar.className = "btn-enviar";
formulario.appendChild(btnEnviar);



export { formulario };