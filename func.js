function AlteraEstadoRele(){
    var estado = document.getElementById("estado").innerHTML;
	var estado2 = document.getElementById("estado2").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele_ligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Desligar Rele</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele_desligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Ligar Rele</a>";
    }
	if(estado2 === "0"){
		document.getElementById("estado2").innerHTML="1";
        document.getElementById("rele2").innerHTML="<div class='rele_ligado2'></div>";
        document.getElementById("botao2").innerHTML="<a href='/?desligar2' class='botao2'>Desligar Rele 2</a>";
	}
	else {
        document.getElementById("estado2").innerHTML="0";
        document.getElementById("rele2").innerHTML="<div class='rele_desligado2'></div>";
        document.getElementById("botao2").innerHTML="<a href='/?ligar' class='botao2'>Ligar Rele2</a>";
    }
}