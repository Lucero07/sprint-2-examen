function Tarjeta(id, rotulo) {
    this.rotulo = rotulo;
    this.id = id;
    this.pendiente = [];

    this.agregar_pendiente = function(pendiente) {
        this.pendiente.push(pendiente);
    }
};

function Pendiente(id, content) {
    this.id = id;
    this.content = content;

};

var catalogo = [];

function generar_lista() {
    var rotulo = document.getElementById('titulo_lista').value;
    var id = Date.now();
    var lista = new Tarjeta(id, rotulo);
    if (rotulo === '') {
        alert('No estas agregando una Tarjeta')
    } else {
        lista.innerHTML = (rotulo === '' ? '' : rotulo);
        catalogo.push(lista);
        crear_HTML(lista);
        document.getElementById('titulo_lista').value ='';
    };
};

function crear_HTML(lista) {
    var seccion_caja = document.createElement('section');
    var arreglo_lista = document.getElementById('arreglo_lista');

    var texto_pendiente = document.createElement('input');
    var crear_pendiente = document.createElement('input');
    var borrar_pendiente = document.createElement('input');

    texto_pendiente.type = 'text';
    texto_pendiente.id = 'text-' + lista.id;
    texto_pendiente.placeholder = "Agregar un pendiente";

    crear_pendiente.type = 'submit';
    crear_pendiente.value = 'Crear Pendiente';
    crear_pendiente.onclick = agregar_pendiente;
    crear_pendiente.setAttribute('data-lista-id', lista.id);

    borrar_pendiente.type = 'submit';
    borrar_pendiente.value = 'Borrar Pendiente';
    borrar_pendiente.onclick = eliminar_pendiente;
    borrar_pendiente.setAttribute('data-lista-id', lista.id);

    seccion_caja.id = lista.id;
    var subtitulo = document.createElement('h3');
    subtitulo.innerText = lista.rotulo;
    seccion_caja.appendChild(subtitulo);
    arreglo_lista.appendChild(seccion_caja);
    arreglo_lista.appendChild(texto_pendiente);
    arreglo_lista.appendChild(crear_pendiente);
    arreglo_lista.appendChild(borrar_pendiente);
};

function agregar_pendiente() {
    var id_tarjeta = this.getAttribute('data-lista-id');
    var lista_agregar_elemento = catalogo.filter(function(lista) {
        return lista.id == id_tarjeta;
    })
    var textoDePendiente = document.getElementById('text-' + id_tarjeta.toString()).value;
    var pendient = new Pendiente(Date.now(), textoDePendiente)
    if (textoDePendiente === '') {
        alert('No estas agregando un pendiente')
    } else {
        pendient.innerHTML = (textoDePendiente === '' ? '' : textoDePendiente);
        lista_agregar_elemento[0].agregar_pendiente(pendient);
        crear_HTML_pendiente(id_tarjeta, pendient);
         document.getElementById('text-' + id_tarjeta.toString()).value='';
    };
};

function crear_HTML_pendiente(id_tarjeta, pendiente) {
    var li_caja = document.createElement('li');
    var borrar_elemento = document.createElement('input')

    borrar_elemento.type = 'submit';
    borrar_elemento.value = 'x';
    borrar_elemento.onclick = eliminar_elemento;



    li_caja.innerText = pendiente.content;
    var lista_padre = document.getElementById(id_tarjeta)
    lista_padre.appendChild(li_caja);
    li_caja.appendChild(borrar_elemento)


};

function eliminar_pendiente() {
    var id_pendiente = this.getAttribute('data-lista-id');
    var lis= document.getElementById(id_pendiente);
    //.getElementsByTagName('section_caja')
    if (confirm('¿seguro que quieres eliminar esto')) {
      console.log(id_pendiente);
    lis.parentNode.removeChild(id_pendiente);
    //this.parentNode.removeChild(this);
    }

    console.log(lis);
    console.log('pendiente ;)');


};

function eliminar_elemento(lista) {
    console.log(
        lista.parentNode.getElementById('li'));
    if (confirm('¿seguro que quieres eliminar esto')) {
        elemento.parentNode.removeChild(this);
    };
}
