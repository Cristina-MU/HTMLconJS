/* ---------------- creacion de elementos -------------------*/
const header = document.createElement("header");

const h1 = document.createElement("h1");

const nav = document.createElement("nav");

const ul = document.createElement("ul");

const li_1 = document.createElement("li");
const li_2 = document.createElement("li");
const li_3 = document.createElement("li");
const li_4 = document.createElement("li");

const a_1 = document.createElement("a");
const a_2 = document.createElement("a");
const a_3 = document.createElement("a");
const a_4 = document.createElement("a");

const sec_1 = document.createElement("section");
const h2_1 = document.createElement("h2");
const div_1 = document.createElement("div");

const sec_2 = document.createElement("section");
const h2_2 = document.createElement("h2");
const div_2 = document.createElement("div");

const sec_3 = document.createElement("section");
const h2_3 = document.createElement("h2");
const div_3 = document.createElement("div");

const sec_4 = document.createElement("section");
const h2_4 = document.createElement("h2");
const form = document.createElement("form");

const footer = document.createElement("footer");
const p = document.createElement("p");

/* ---------------- añadimos texto -------------------*/
h1.textContent="Impresoras 3D";
a_1.textContent="Impresoras destacadas";
a_2.textContent="Marcas";
a_3.textContent="Ofertas";
a_4.textContent="Contacto";

h2_1.textContent="Impresoras 3D destacadas";
h2_2.textContent="Marcas de impresoras 3D";
h2_3.textContent="Ofertas en impresoras 3D";
h2_4.textContent="Contacto";

p.textContent="&copy; 2024 Impresoras3D.com";

/* ---------------- enlaces, id y clases -------------------*/
a_1.href="#destacadas";
a_2.href="#marcas";
a_3.href="#oferta";
a_4.href="#contacto";

sec_1.setAttribute('id','destacadas');
div_1.className="productos";

sec_2.setAttribute('id', 'marcas');
div_2.className="marcas";

sec_3.setAttribute('id','ofertas');
div_3.className="ofertas";

sec_4.setAttribute('id', 'contacto');
form.setAttribute('id','formulario-contacto');

/* ---------------- unión de elementos -------------------*/
document.body.appendChild(header);

header.appendChild(h1);
header.appendChild(nav);

nav.appendChild(ul);

ul.appendChild(li_1);
li_1.appendChild(a_1);
ul.appendChild(li_2);
li_2.appendChild(a_2);
ul.appendChild(li_3);
li_3.appendChild(a_3);
ul.appendChild(li_4);
li_4.appendChild(a_4);

document.body.appendChild(sec_1);
sec_1.appendChild(h2_1);
sec_1.appendChild(div_1);

document.body.appendChild(sec_2);
sec_2.appendChild(h2_2);
sec_2.appendChild(div_2);

document.body.appendChild(sec_3);
sec_3.appendChild(h2_3);
sec_3.appendChild(div_3);

document.body.appendChild(sec_4);
sec_4.appendChild(h2_4);
sec_4.appendChild(form);

document.body.appendChild(footer);
footer.appendChild(p);