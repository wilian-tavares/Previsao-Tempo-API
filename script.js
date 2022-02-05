const city = document.getElementById('form-cidade');

const atual = document.getElementById('atual');
const maxima = document.getElementById('maxima');
const minima = document.getElementById('minima');
const cidadeAtual = document.getElementById('cidadeAtual');

async function apiTempo(cidades) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidades}&units=metric&appid=3d6a3d1fc18e2c50061da8437fb6b0b9`;

        const data = await fetch(url)
        const json = await data.json();

        const cidade = json.cidade;
        const pais = json.sys.country;

        const temperaturaAtual = json.main.temp;
        const temperaturaMaxima = json.main.temp_max;
        const temperaturaMinima = json.main.temp_min;

        cidadeAtual.textContent = `${cidades} - ${pais}`
        atual.textContent = `${temperaturaAtual.toFixed(1)}°`;
        minima.textContent = `Mín: ${temperaturaMinima.toFixed(1)}°`;
        maxima.textContent = `Máx: ${temperaturaMaxima.toFixed(1)}°`;


    } catch (error) {
        console.log(error);
    }
}


city.addEventListener('keyup', () => {
    const cidades = city.value;
    apiTempo(cidades)
})


