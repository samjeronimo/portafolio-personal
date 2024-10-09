/* navBar */
let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://cdn-icons-png.flaticon.com/512/518/518713.png";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Samuel Jerónimo";
navBarDiv.appendChild(h2);


export { navBarDiv }