const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const nome = document.getElementById('nome').value;
	const cognome = document.getElementById('cognome').value;
	const email = document.getElementById('email').value;
	const telefono = document.getElementById('telefono').value;
	const nascita = document.getElementById('nascita').value;
	const imbarcazione = document.getElementById('imbarcazione').value;
	const livello = document.querySelector('input[name="livello"]:checked').value;

	const data = {
		nome,
		cognome,
		email,
		telefono,
		nascita,
		imbarcazione,
		livello
	};

	fetch('https://example.com/api/iscrizione', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => {
		if (!response.ok) {
			throw new Error('Errore nella richiesta');
		}
		alert('Iscrizione avvenuta con successo!');
	})
	.catch(error => {
		console.error(error);
		alert('Errore nella richiesta');
	});
});
