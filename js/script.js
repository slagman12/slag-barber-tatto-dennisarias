const edadUsuario = document.getElementById("edadUsuario");
const btnVerificar = document.getElementById("btnVerificar");
const resultadoEdad = document.getElementById("resultadoEdad");

if (edadUsuario && btnVerificar && resultadoEdad) {
    btnVerificar.addEventListener("click", function() {

        const edad = Number(edadUsuario.value);

        if (edadUsuario.value.trim() === "") {
            resultadoEdad.textContent = "INGRESA TU EDAD";
            resultadoEdad.style.color = "orange";

        } else if (!Number.isFinite(edad) || edad < 0) {
            resultadoEdad.textContent = "EDAD NO VÁLIDA";
            resultadoEdad.style.color = "red";

        } else if (edad < 13) {
            resultadoEdad.textContent = "ACCESO DENEGADO";
            resultadoEdad.style.color = "red";

        } else if (edad < 18) {
            resultadoEdad.textContent = "NECESITAS AUTORIZACIÓN DE UN ADULTO";
            resultadoEdad.style.color = "orange";

        } else {
            resultadoEdad.textContent = "ACCESO PERMITIDO";
            resultadoEdad.style.color = "green";
        }
    });
}
const estiloTatuaje = document.getElementById("estiloTatuaje");
const btnEstilo = document.getElementById("btnEstilo");
const resultadoEstilo = document.getElementById("resultadoEstilo");

if (estiloTatuaje && btnEstilo && resultadoEstilo) {

    btnEstilo.addEventListener("click", function() {

        const estilo = estiloTatuaje.value;

        if (estilo === "") {
            resultadoEstilo.textContent = "Selecciona un estilo de tatuaje.";
            resultadoEstilo.style.color = "red";

        } else if (estilo === "blackwork") {
            resultadoEstilo.textContent =
                "BLACKWORK: Tatuajes realizados principalmente con tinta negra y diseños intensos.";
            resultadoEstilo.style.color = "black";

        } else if (estilo === "lettering") {
            resultadoEstilo.textContent =
                "LETTERING: Tatuajes de letras, nombres, frases y palabras personalizadas.";
            resultadoEstilo.style.color = "black";

        } else if (estilo === "realismo") {
            resultadoEstilo.textContent =
                "REALISMO: Tatuajes con detalles que parecen fotografías.";
            resultadoEstilo.style.color = "black";

        } else if (estilo === "tribal") {
            resultadoEstilo.textContent =
                "TRIBAL: Diseños con líneas, figuras y patrones geométricos.";
            resultadoEstilo.style.color = "black";

        } else if (estilo === "oldschool") {
            resultadoEstilo.textContent =
                "OLD SCHOOL: Tatuajes clásicos con colores fuertes y contornos definidos.";
            resultadoEstilo.style.color = "black";

        } else if (estilo === "fineline") {
            resultadoEstilo.textContent =
                "FINE LINE: Tatuajes delicados realizados con líneas finas.";
            resultadoEstilo.style.color = "black";
        }
    });
}
const servicioBarberia = document.getElementById("servicioBarberia");
const btnBarberia = document.getElementById("btnBarberia");
const resultadoBarberia = document.getElementById("resultadoBarberia");

if (servicioBarberia && btnBarberia && resultadoBarberia) {

    btnBarberia.addEventListener("click", function() {

        const precio = servicioBarberia.value;

        if (precio === "") {
            resultadoBarberia.textContent = "Selecciona un servicio.";
            resultadoBarberia.style.color = "red";

        } else {
            resultadoBarberia.textContent =
                "El precio de tu servicio es: $" + precio;
            resultadoBarberia.style.color = "green";
        }
    });
}
const botonContar = document.getElementById("btnContar");
const textoContador = document.getElementById("textoContador");

let contador = 0;

if (botonContar && textoContador) {

    botonContar.addEventListener("click", function() {
        contador++;
        textoContador.textContent = "Clics: " + contador;
    });
}
const catalogo = [
    "Producto 1",
    "Producto 2",
    "Producto 3"
];

const botonCatalogo = document.getElementById("btnCatalogo");
const listaCatalogo = document.getElementById("listaCatalogo");

if (botonCatalogo && listaCatalogo) {

    botonCatalogo.addEventListener("click", function() {

        let html = "";

        for (let i = 0; i < catalogo.length; i++) {
            html += "<li>" + catalogo[i] + "</li>";
        }

        listaCatalogo.innerHTML = html;
    });
}
const productos = [

    {
        id: 1,
        nombre: "Camiseta",
        precio: 20.50,
        categoria: "Ropa",
        foto: "Imagenes/camiseta.png"
    },

    {
        id: 2,
        nombre: "Gorra",
        precio: 15,
        categoria: "Ropa",
        foto: "Imagenes/gorras.png"
    },

    {
        id: 3,
        nombre: "Cadenas",
        precio: 25,
        categoria: "Accesorios",
        foto: "Imagenes/cadena.png"
    },

    {
        id: 4,
        nombre: "Zapatos",
        precio: 50,
        categoria: "Calzado",
        foto: "Imagenes/nike.png"
    },

    {
        id: 5,
        nombre: "Joyería",
        precio: 10,
        categoria: "Accesorios",
        foto: "Imagenes/aretes.png"
    },

    {
        id: 6,
        nombre: "Vapes",
        precio: 15,
        categoria: "Vapeo",
        foto: "Imagenes/vape.png"
    }

];

const listaProductos = document.getElementById("listaProductos");

function mostrarProductos(lista) {

    if (!listaProductos) return;

    let html = "";

    if (lista.length === 0) {

        html = "<li>No se encontraron productos.</li>";

    } else {

        for (let i = 0; i < lista.length; i++) {

            const p = lista[i];

            html += `
                <li>
                    <img src="${p.foto}" alt="${p.nombre}" class="foto-producto">
                    <h3>${p.nombre}</h3>
                    <p>$${p.precio.toFixed(2)}</p>

                    <button type="button" onclick="agregarAlCarrito(${p.id})">
                        Agregar
                    </button>
                </li>
            `;
        }
    }

    listaProductos.innerHTML = html;
}

if (listaProductos) {
    mostrarProductos(productos);
}
const campoBuscar = document.getElementById("campoBuscar");
const selCategoria = document.getElementById("selCategoria");
const botonFiltrar = document.getElementById("btnFiltrar");

function filtrarProductos() {

    const texto = campoBuscar.value.trim().toLowerCase();
    const categoria = selCategoria.value;

    const resultado = [];

    for (let i = 0; i < productos.length; i++) {

        const p = productos[i];

        const coincideNombre =
            p.nombre.toLowerCase().includes(texto);

        const coincideCategoria =
            categoria === "todas" || p.categoria === categoria;

        if (coincideNombre && coincideCategoria) {
            resultado.push(p);
        }
    }

    mostrarProductos(resultado);
}

if (campoBuscar && selCategoria && botonFiltrar) {

    botonFiltrar.addEventListener("click", filtrarProductos);

    campoBuscar.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            filtrarProductos();
        }
    });
}
let carrito = [];

const textoCarrito = document.getElementById("textoCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const botonVaciar = document.getElementById("btnVaciar");
const mensajeCompra = document.getElementById("mensajeCompra");

function agregarAlCarrito(id) {

    const producto = productos.find(function(p) {
        return p.id === id;
    });

    if (producto) {
        carrito.push(producto);
    }

    mostrarCarrito();
}

function calcularTotalCarrito() {

    let total = 0;

    carrito.forEach(function(producto) {
        total += producto.precio;
    });

    return total;
}

function mostrarCarrito() {

    if (listaCarrito) {

        listaCarrito.innerHTML = "";

        if (carrito.length === 0) {

            if (textoCarrito) {
                textoCarrito.textContent = "El carrito está vacío.";
            }

        } else {

            if (textoCarrito) {
                textoCarrito.textContent =
                    "Tienes " + carrito.length + " producto(s).";
            }

            carrito.forEach(function(producto, indice) {

                const elemento = document.createElement("li");

                elemento.innerHTML =
                    producto.nombre + " - $" +
                    producto.precio.toFixed(2) +
                    " <button type='button' onclick='eliminarDelCarrito(" +
                    indice + ")'>Eliminar</button>";

                listaCarrito.appendChild(elemento);
            });
        }
    }

    if (totalCarrito) {
        totalCarrito.textContent =
            calcularTotalCarrito().toFixed(2);
    }
}

function eliminarDelCarrito(indice) {

    carrito.splice(indice, 1);

    mostrarCarrito();
}

function vaciarCarrito() {

    carrito = [];

    mostrarCarrito();
}

if (botonVaciar) {
    botonVaciar.addEventListener("click", vaciarCarrito);
}
const cuUsuario = document.getElementById("cuUsuario");
const cuClave = document.getElementById("cuClave");

const mensajeCuenta = document.getElementById("mensajeCuenta");
const estadoSesion = document.getElementById("estadoSesion");
const listaPedidos = document.getElementById("listaPedidos");

const botonRegistro = document.getElementById("btnRegistro");
const botonEntrar = document.getElementById("btnEntrar");
const botonSalir = document.getElementById("btnSalir");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuarioActivo = localStorage.getItem("usuarioActivo");

function avisar(texto, color) {

    if (mensajeCuenta) {
        mensajeCuenta.textContent = texto;
        mensajeCuenta.style.color = color;
    }
}

function buscarUsuario(nombre) {

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].usuario === nombre) {
            return usuarios[i];
        }
    }

    return null;
}

function registrar() {

    if (!cuUsuario || !cuClave) return;

    const nombre = cuUsuario.value.trim();
    const clave = cuClave.value;

    if (nombre === "" || clave.length < 6) {
        avisar(
            "Escribe un usuario y una contraseña de al menos 6 caracteres.",
            "red"
        );
        return;
    }

    if (buscarUsuario(nombre) !== null) {
        avisar("Ese usuario ya existe.", "red");
        return;
    }

    usuarios.push({
        usuario: nombre,
        clave: clave
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    avisar("Cuenta creada. Ahora inicia sesión.", "green");
}

function iniciarSesion() {

    if (!cuUsuario || !cuClave) return;

    const u = buscarUsuario(cuUsuario.value.trim());

    if (u === null || u.clave !== cuClave.value) {
        avisar("Usuario o contraseña incorrectos.", "red");
        return;
    }

    usuarioActivo = u.usuario;

    localStorage.setItem("usuarioActivo", usuarioActivo);

    avisar("Bienvenido, " + usuarioActivo + ".", "green");

    actualizarSesion();
}

function cerrarSesion() {

    usuarioActivo = null;

    localStorage.removeItem("usuarioActivo");

    avisar("Sesión cerrada.", "green");

    actualizarSesion();
}

function mostrarPedidos() {

    if (!listaPedidos) return;

    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    let html = "";

    for (let i = 0; i < pedidos.length; i++) {

        if (pedidos[i].usuario === usuarioActivo) {

            html += "<li>" +
                pedidos[i].fecha +
                " - " +
                pedidos[i].cantidad +
                " producto(s) - $" +
                Number(pedidos[i].total).toFixed(2) +
                "</li>";
        }
    }

    if (html === "") {
        html = "<li>Aún no tienes pedidos.</li>";
    }

    listaPedidos.innerHTML = html;
}

function actualizarSesion() {

    if (estadoSesion) {

        if (usuarioActivo === null) {
            estadoSesion.textContent = "Sin sesión.";

        } else {
            estadoSesion.textContent =
                "Sesión activa: " + usuarioActivo;
        }
    }

    mostrarPedidos();
}

if (botonRegistro) {
    botonRegistro.addEventListener("click", registrar);
}

if (botonEntrar) {
    botonEntrar.addEventListener("click", iniciarSesion);
}

if (botonSalir) {
    botonSalir.addEventListener("click", cerrarSesion);
}

actualizarSesion();
function finalizarCompra() {

    if (!mensajeCompra) return;

    if (usuarioActivo === null) {

        mensajeCompra.textContent = "Inicia sesión para comprar.";
        mensajeCompra.style.color = "red";

        return;
    }

    if (carrito.length === 0) {

        mensajeCompra.textContent = "Tu carrito está vacío.";
        mensajeCompra.style.color = "red";

        return;
    }

    const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    const pedido = {
        usuario: usuarioActivo,
        cantidad: carrito.length,
        total: calcularTotalCarrito(),
        fecha: new Date().toLocaleDateString()
    };

    pedidos.push(pedido);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    mensajeCompra.textContent =
        "Muchas gracias por confiar en Slag. Te esperamos pronto, " +
        usuarioActivo +
        ". Pedido registrado por $" +
        pedido.total.toFixed(2) + ".";

    mensajeCompra.style.color = "green";

    vaciarCarrito();

    mostrarPedidos();
}
function darMeGusta(boton) {

    const contadorLikes = boton.querySelector("span");

    if (!contadorLikes) return;

    let likes = Number(contadorLikes.textContent);

    likes++;

    contadorLikes.textContent = likes;

    boton.style.backgroundColor = "#ff1744";
    boton.style.color = "white";
}
const btnTotal = document.getElementById("btnTotal");

if (btnTotal) {

    btnTotal.addEventListener("click", function() {

        const campoPrecio = document.getElementById("campoPrecio");
        const campoCantidad = document.getElementById("campoCantidad");
        const resultado = document.getElementById("resultadoTotal");

        if (!campoPrecio || !campoCantidad || !resultado) return;

        const precio = Number(campoPrecio.value);
        const cantidad = Number(campoCantidad.value);

        if (
            campoPrecio.value.trim() === "" ||
            campoCantidad.value.trim() === "" ||
            !Number.isFinite(precio) ||
            !Number.isFinite(cantidad) ||
            precio <= 0 ||
            cantidad <= 0
        ) {
            resultado.textContent =
                "Ingresa un precio y una cantidad válidos.";
            resultado.style.color = "red";

        } else {

            const total = precio * cantidad;

            resultado.textContent =
                "El total es: $" + total.toFixed(2);

            resultado.style.color = "green";
        }
    });
}
mostrarCarrito();
const formularioCita = document.getElementById("formularioCita");

if (formularioCita) {

    formularioCita.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const servicio = document.getElementById("servicio").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;

        const resultado = document.getElementById("resultadoCita");

        resultado.textContent =
            "¡Gracias " + nombre +
            "! Tu solicitud de cita para " + servicio +
            " ha sido registrada en esta página. Fecha: " +
            fecha + " a las " + hora +
            ". Te contactaremos al " + telefono + ".";

        resultado.style.color = "green";

        formularioCita.reset();
    });
}

function reaccionVideo(video, tipo) {

    let clave = video + "_" + tipo;

    let contador = Number(localStorage.getItem(clave)) || 0;

    contador++;

    localStorage.setItem(clave, contador);

    document.getElementById(video + "-" + tipo).textContent = contador;
}

// Recuperar los contadores guardados
document.addEventListener("DOMContentLoaded", function() {

    for (let i = 1; i <= 9; i++) {

        let video = "video" + i;

        let like = Number(localStorage.getItem(video + "_like")) || 0;
        let dislike = Number(localStorage.getItem(video + "_dislike")) || 0;

        document.getElementById(video + "-like").textContent = like;

        document.getElementById(video + "-dislike").textContent = dislike;
    }

});
