function agregarPendiente(){
    var texto=document.getElementById('areaPendiente').value;
    var li=document.createElement('LI');
  if( li.innerHTML=texto==''){
    (alert('No estas agregando un Pendiente?'))
  }else{
    li.innerHTML=texto==''?'':texto;
    document.getElementById('Pendientes').appendChild(li);
    document.getElementById('areaPendiente').value ="";
  }
};
function borrarPendiente(){
    lis=document.getElementById('Pendientes').getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿seguro que quieres eliminar esté Pendiente?'))
            this.parentNode.removeChild(this);
        };
    }
};
//lista interna

function agregarActividad(){
    var texto=document.getElementById('areaPendiente').value;
    var li=document.createElement('LI');
  if( li.innerHTML=texto==''){
    (alert('No estas agregando un Actividad?'))
  }else{
    li.innerHTML=texto==''?'':texto;
    document.getElementById('Actividads').appendChild(li);
    document.getElementById('areaActividad').value ="";
  }
};
function borrarActividad(){
    lis=document.getElementById('Actividads').getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿seguro que quieres eliminar esté Actividad?'))
            this.parentNode.removeChild(this);
        };
    }
};
