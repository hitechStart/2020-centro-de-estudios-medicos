function validar(){

	var error=0;
	var mensajesError='';
	var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var regexTelefono=/^\d{4}-\d{4}$/;	 
	           
	var apellido=document.getElementById("apellido").value;
	
		if(document.getElementById('nombre').value==''){
			error++;
			mensajesError+="<p>El campo nombre es obligatorio</p>";
	    }

		if(apellido.length==0){
			error++;
			mensajesError+="<p>El campo apellido es obligatorio</p>";
	    }

		if(!regexTelefono.test(document.getElementById("telefono").value)){
			error++;
			mensajesError+="<p>Tiene que ser un telefono</p>";
	    }

		if(!regexemail.test(document.getElementById("email").value)){
			error++;
			mensajesError+="<p>Tiene que ser un email</p>";
	    }
	
		if(error==0){
			return true;

		}else{
			document.getElementById("mensajeError").innerHTML=mensajesError;
			return false;
		}
}