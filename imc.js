/*
<script>

	let peso = 63.5;
	let altura = 1.77;

	let imc = peso / altura ** 2;

	if (imc < 18.5) {
		alert('magreza');
	} else if (imc < 25) {
		alert('normal');
	} else if (imc < 30) {
		alert('sobrepeso');
	} else if (imc < 40) {
		alert('obesidade');
	} else {
		alert('obesidade grave');
	}

</script>
*/

let metodo = "Dinheiro"


switch(metodo) {
    case "Dinheiro":
        alert("Pagamento em dinheiro")
        break;
    case "Cartão de débito":
        alert("Pagamento em cartão de débito")
        break;
    case "Cartão de crédito":
        alert("Pagamento em cartão de crédito")
        break;
    case "Cheque": 
        alert("Pagamento em cheque")
        break;
    case "Carnê":
        alert("Pagamento por carnê")
        break;
    case "Vale alimentação":
        alert("Pagamento por vale alimentação")
        break;
    default:
        alert("Opção de pagamento inválida!")
        break;
     
        
}