import { navBarDiv } from "./componentes/navBar/navbar.js";
import { proyectos } from "./componentes/proyectos/project.js";
import { formulario } from "./componentes/navBar/formulario.js";
import { divHerra } from "./componentes/navBar/lista.js";


/* COMPONENTES DE LA PÁGINA */ 

let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
navBar.appendChild(divHerra);
navBar.appendChild(formulario);
DOM.appendChild(navBar);

let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild(proyectos());
DOM.appendChild(proyect);