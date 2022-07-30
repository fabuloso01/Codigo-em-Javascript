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