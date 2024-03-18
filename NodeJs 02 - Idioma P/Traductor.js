document.getElementById('traductorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const frase = document.getElementById('frase').value;
    
    fetch('http://localhost:8888/traducir', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ frase: frase })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').innerText = `Frase traducida: ${data.traduccion}`;
    })
    .catch(error => console.error('Error:', error));
});