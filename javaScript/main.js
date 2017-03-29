function agregarPendiente(){
    var texto=document.getElementById('areaPendiente').value;
    var li=document.createElement('dt');
    console.log(li);
  if( li.innerHTML=texto==''){
    (alert('No estas agregando un Pendiente?'))
  }else{
    li.innerHTML=texto==''?'':texto +"  <button onclick='borrarPendiente()'>X</button>";
    document.getElementById('Pendientes').appendChild(li);
    document.getElementById('areaPendiente').value ="";

  }
};



//funcion borrar elementos
function borrarPendiente(){
    lis=document.getElementById('Pendientes').getElementsByTagName('dt');
        for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
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
    lis2.innerHTML=texto==''?'':texto;
    document.getElementById('Pendientes').appendChild(lis2);
    document.getElementById('areaPendiente').value ="";
    }
};


function borrarPendiente1(){
    lis=elemento.parentNode.getAttribute('id');
        for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿seguro que quieres eliminar esto'))
            this.parentNode.removeChild(this);
        };
    }
};
//prueba
