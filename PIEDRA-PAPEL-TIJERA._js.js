var tope=0;

var val1 = '';
var valorMaquinaString='';
function valorUsuario(val){
    //alert('valor usuario '+val);
    
    
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

    
     //alert('valor maquina'+valMaq)
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
    
    a(valorMaquinaString,val1);
}
function a(valMaq,val1){
    if((valMaq=='PIEDRA' && val1=='PIEDRA')||( valMaq=='PAPEL' && val1=='PAPEL') ||( valMaq=='TIJERA' && val1=='TIJERA') ){
        alert('EMPATE')
    }else if((valMaq=='PIEDRA' && val1=='TIJERA') || (valMaq=='TIJERA' && val1=='PAPEL')|| (valMaq=='PAPEL' && val1=='PIEDRA')){
        alert('GANA TU COMPU')
    }else if((valMaq=='TIJERA' && val1=='PIEDRA') || (valMaq=='PAPEL' && val1=='TIJERA') || (valMaq=='PIEDRA' && val1=='PAPEL')){
        alert('GANASTE')
    }
}
