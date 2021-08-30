var tope=0;

var val1 = '';
var sumaUser=0;
var sumaMaq=0;
var valorMaquinaString='';
var contadorRep=0;
var valorRepb=0;

function valorUsuario(val){
   
    getValorRep();
    if (val==='PIEDRA'){
        val1='PIEDRA';  
        document.getElementById('user').src="piedra-slide.png";
            //document.getElementById('maquina').src="pri.jpg";
    }else if(val==='PAPEL'){
        document.getElementById('user').src="papel-slide.png";
        val1='PAPEL';
    }else{
        document.getElementById('user').src="tijera.png";
        val1='TIJERA';
    }
    
    valorMaquina();
}

function valorMaquina(){
    valMaq= Math.floor(Math.random()*(1+2)+1);

    asignarValorMaquina();
}

function asignarValorMaquina(){
    if (valMaq===1){
        document.getElementById('maquina').src="piedra-slide.png";
        valorMaquinaString='PIEDRA'
        
    }else if(valMaq===2){
        document.getElementById('maquina').src="papel-slide.png";
        valorMaquinaString='PAPEL'
       
    }else{
        document.getElementById('maquina').src="tijera.png";
       valorMaquinaString='TIJERA'
       
    }
    
    compararResulMaquinaUsuario(valorMaquinaString,val1);
}
function compararResulMaquinaUsuario(valMaq,val1){
    if((valMaq=='PIEDRA' && val1=='PIEDRA')||( valMaq=='PAPEL' && val1=='PAPEL') ||( valMaq=='TIJERA' && val1=='TIJERA') ){
        //alert('EMPATE')
        document.getElementById('tabler').innerHTML='EMPATE'
        sumaUser= sumaUser+1;
        sumaMaq= sumaMaq+1;
        resultado(sumaUser,sumaMaq);
    }else if((valMaq=='PIEDRA' && val1=='TIJERA') || (valMaq=='TIJERA' && val1=='PAPEL')|| (valMaq=='PAPEL' && val1=='PIEDRA')){
        //alert('GANA TU COMPU')
        document.getElementById('tabler').innerHTML='GANADOR INTELIGENCIA ARTIFICIAL'
        sumaUser= sumaUser+0;
        sumaMaq= sumaMaq+1;
        resultado(sumaUser,sumaMaq);
    }else if((valMaq=='TIJERA' && val1=='PIEDRA') || (valMaq=='PAPEL' && val1=='TIJERA') || (valMaq=='PIEDRA' && val1=='PAPEL')){
        //alert('GANASTE USUARIO')
        document.getElementById('tabler').innerHTML='GANADOR USUARIO'
        sumaUser= sumaUser+1;
        resultado(sumaUser,sumaMaq);
    }
    
}

function resultado(sumaUser,sumaMaq){
        console.log('res usuario'+ sumaUser)
        console.log('res maquina'+ sumaMaq)

        document.getElementById('resMaquina').innerHTML=sumaMaq
        document.getElementById('resUser').innerHTML=sumaUser
        contadorRep++;
        ganador();
}

function getValorRep(){
//     alert('contador rep dentro de la funcion'+contadorRep)
        valorRepb=document.getElementById("rep").value;
//     alert('valor rep del input'+valorRepb)
        if (valorRepb==='') {
          alert('DEBES INDICAR LA CANTIDAD DE VECES A JUGAR')
          location.reload();
        }
}

function ganador(){
    if (valorRepb==contadorRep){
        if (sumaUser>sumaMaq) {
            document.getElementById('tablerGeneral').innerHTML='GANADOR FINAL: USUARIO!!!';
            setTimeout(function(){ 
                alert("¿Desea Reiniciar El Juego");
                location.reload();
            
            }, 3000);
            
        }else if(sumaUser<sumaMaq){
            document.getElementById('tablerGeneral').innerHTML='GANADOR FINAL: USUARIO!!!';
            setTimeout(function(){ 
                alert("¿Desea Reiniciar El Juego");
                location.reload();
            
            }, 3000);
        }else{
            document.getElementById('tablerGeneral').innerHTML='RESULTADO FINAL: EMPATE!!!';
            setTimeout(function(){ 
                alert("¿Desea Reiniciar El Juego");
                location.reload();
            
            }, 3000);
        }
    }
}