function agregarPendiente(){
    var texto=document.getElementById('areaPendiente').value;
    var li=document.createElement('dt');
    console.log(li);
  if(texto === ''){
    (alert('No estas agregando un Pendiente?'))
  }else{
    li.innerHTML = texto ===''?'':texto +"  <button onclick='borrarPendiente(this)'>X</button>";
    document.getElementById('Pendientes').appendChild(li);
    document.getElementById('areaPendiente').value ="";

  }
};



//funcion borrar elementos
function borrarPendiente(){
    lis=document.getElementById('Pendientes').getElementsByTagName('dt');
        for(var i=0; i<lis.length;i++){
        lis[i]=function(){
            if(confirm('¿seguro que quieres eliminar esto'))
            this.parentNode.removeChild(this);
      };
  }
};

//lista interna
  var lis2;
function agregarActividad(){
    var texto=document.getElementById('areaPendiente').value;
  lis2=document.createElement('dd');
  console.log(lis2);
  if( lis2.innerHTML=texto==''){
    (alert('No estas agregando un Actividad?'))
  }else{
    lis2.innerHTML=texto==''?'':texto +"  <button onclick='borrarPendiente1(this)'>X</button>";
    document.getElementById('Pendientes').appendChild(lis2);
    document.getElementById('areaPendiente').value ="";
    }
};


function borrarPendiente1(elemento){
    lis=elemento.parentNode.getAttribute('dd');
    if(confirm('¿seguro que quieres eliminar esto')){
            elemento.parentNode.remove(this);
        };
    };
//prueba
