function cambiar(){

	var seleccion=document.getElementsByName("seleccionPais");
    var opciones=document.getElementsByName("sintoma5");

    for (i in seleccion){

    	if(seleccion[i].value=='si'&& seleccion[i].checked){
    		document.getElementById("paises").style.display="block";
    	}

    	if(seleccion[i].value=='no'&& seleccion[i].checked){
    		document.getElementById("paises").style.display="none";
    	}
   
    }

    for (i in opciones){

    	if(opciones[i].value=='si'&& opciones[i].checked){
    		document.getElementById("direccion").style.display="block";
    	}

    	if(opciones[i].value=='no'&& opciones[i].checked){
    		document.getElementById("direccion").style.display="none";
    	}
   
    }
}