function validar(){
	var error=0;
	var mensajesError='';
	var apellido=document.getElementById("apellido").value;
	var regexDni=/^\d{8}$/;
	var regexTelefono=/^\d{4}-\d{4}$/;
	var seleccionado=false;
	var contadorEnfermedad=0;

		if(document.getElementById('nombre').value==''){
		   error++;
		   mensajesError+="<p>El campo nombre es obligatorio</p>";
	    }

	    if(apellido.length==0){
		   error++;
		   mensajesError+="<p>El campo apellido es obligatorio</p>";
	    }

	    if(!regexDni.test(document.getElementById("dni").value)){
			error++;
			mensajesError+="<p>Tiene que ser un Dni</p>";
	    }

	    if(!regexTelefono.test(document.getElementById("telefono").value)){
			error++;
			mensajesError+="<p>Tiene que ser un telefono</p>";
	    }

	var enfermedad=document.getElementsByName("sintoma1");
	
	    for(i in enfermedad){
		    if(enfermedad[i].checked){
			  seleccionado=true;
		    if(enfermedad[i].value=='si'){
                contadorEnfermedad++;

            }

          }
		    
	    }

	var enfermedad=document.getElementsByName("sintoma2");

	    for(i in enfermedad){
		    if(enfermedad[i].checked){
			  seleccionado=true;
		    if(enfermedad[i].value=='si'){
                contadorEnfermedad++;

            }

          }
		    
	    }


	var enfermedad=document.getElementsByName("sintoma3");
	
	    for(i in enfermedad){
		    if(enfermedad[i].checked){
			  seleccionado=true;
		    if(enfermedad[i].value=='si'){
                contadorEnfermedad++;

            }

          }
		    
	    }


	var enfermedad=document.getElementsByName("sintoma4");
	
	    for(i in enfermedad){
		    if(enfermedad[i].checked){
			  seleccionado=true;
		    if(enfermedad[i].value=='si'){
                contadorEnfermedad++;

            }

          }
		    
	    }


	var enfermedad=document.getElementsByName("sintoma5");
	
	    for(i in enfermedad){
		    if(enfermedad[i].checked){
			  seleccionado=true;
		    if(enfermedad[i].value=='si'){
                contadorEnfermedad++;

            }

          }
		    
	    }


	    if(!seleccionado){
		   error++;
		   mensajesError+="<p>Los campos de sintomas son obligatorios</p>"
	    }

	    if(error==0){
	       alert("El formulario fue completado correctamente.Tiene "+contadorEnfermedad+" síntomas de COVID-19 fueron registrados");
		   return true;
		   
	    }else{
		   document.getElementById("mensajeError").innerHTML=mensajesError;
		   return false;
	    }
}