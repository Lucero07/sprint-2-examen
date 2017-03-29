function agreagarComentario(){
    var texto=document.getElementById('areaComentario').value;
    var li=document.createElement('LI');
  if( li.innerHTML=texto==''){
    (alert('No estas agregando un Pendiente?'))
  }else{
    li.innerHTML=texto==''?'':texto;
    document.getElementById('Comentarios').appendChild(li);
    document.getElementById('areaComentario').value ="";
  }
};
function borrarComentario(){
    lis=document.getElementById('Comentarios').getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿seguro que quieres eliminar esté Pendiente?'))
            this.parentNode.removeChild(this);
        };
    }

};
