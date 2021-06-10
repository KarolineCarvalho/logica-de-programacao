function pulaLinha() {

        document.write("<br>");
        document.write("<br>");
}

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
}
var btnMostrar = document.querySelector("#btnMostrar");
btnMostrar.addEventListener("click", function(){

	event.preventDefault();

	var form = document.querySelector("#formulario");
	var resposta = document.querySelector("#resultado");
	
	var tabuada = document.querySelector("#tabuada");
	var tabuadaVlr = tabuada.textContent;
	console.log(tabuadaVlr);

	var multiplicador = document.querySelector("#multiplicador");
	var multiplicadorVlr = multiplicador.textContent;
	console.log(multiplicadorVlr);

	var i=1
	while(i<multiplicadorVlr) {

    resposta.appendChild(mostra(parseInt(tabuadaVlr) + " x " + parseInt(multiplicadorVlr) + " = " + (tabuadaVlr * multiplicadorVlr)));
    i++;
 }
 	mostra("FIM");

 	form.reset();
});

 