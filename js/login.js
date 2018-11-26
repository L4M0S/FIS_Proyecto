function redireccionar(){
	
} 

function iniciar()
{
	if (usuario=="rodolfo" && pass=="secreto") {

		document.location.href="indexr.html";
	}
	else if (usuario=="oscar" && pass=="12345")
	{
		document.location.href="indexo.html";
	}
	else
	{
		alert("Datos no validos, intente de nuevo");
	}
}