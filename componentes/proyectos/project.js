function proyectos(){

    let section = document.createElement('section');
    section.className = 'section-proyectos';
    section.appendChild(header());
    section.appendChild(item());


    return section;
}

function header(){
    let divHeader = document.createElement('div');
    divHeader.className = 'header';
    
    let h2 = document.createElement('h2');
    h2.innerText = "Proyectos";
    divHeader.appendChild(h2);

    let btn = document.createElement('div');
    btn.innerHTML = "Github";
    divHeader.appendChild(btn);


    return divHeader;
}

function item(){
    let divLista = document.createElement('div');
    divLista.innerText = "Item de Lista";

    return divLista;
}


export {proyectos}