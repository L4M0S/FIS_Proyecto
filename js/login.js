var insertar=document.getElementById("usuario");
innerHTML = "rodolfo";

function redireccionar(){
	
} 

function iniciar()
{
	var usuario=document.getElementById('campousuario').value;
	var pass=document.getElementById('campopass').value;

	
	if (usuario=="rodolfo" && pass=="secreto") {
		document.location.href="index.html";
	}
	else
	{
		alert("Datos no validos");
	}
}

function crear()
{
	var usuario=document.getElementById('campousuario').value;
	var pass=document.getElementById('campopass').value;

	
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