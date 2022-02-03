// const chave = '8bcc6a8c69b996b7302141521d37b84a';

const city = document.getElementById('form-cidade');

const atual = document.getElementById('atual');
const maxima = document.getElementById('maxima');
const minima = document.getElementById('minima');
const cidadeAtual = document.getElementById('cidadeAtual');

async function tempo(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3d6a3d1fc18e2c50061da8437fb6b0b9`;

        const data = await fetch(url)
        const json = await data.json();

        const cidade = json.cidade;
        const pais = json.sys.country;

        const temperaturaAtual = json.main.temp;
        const temperaturaMaxima = json.main.temp_max;
        const temperaturaMinima = json.main.temp_min;

        atual.textContent = `Atual: ${temperaturaAtual.toFixed(1)}°`;
        minima.textContent = `Mínima: ${temperaturaMinima.toFixed(1)}°`;
        maxima.textContent = `Máxima: ${temperaturaMaxima.toFixed(1)}°`;
        cidadeAtual.textContent = `${cidades} - ${pais}`

        console.log(`${cidades} - ${pais} 
                        \nAtual: ${temperaturaAtual.toFixed(1)}° 
                        \nMinima: ${minima.toFixed(1)}° 
                        \nMáxima: ${maxima.toFixed(1)}°`)

    } catch (error) {
        console.log(error);
    }
}


city.addEventListener('keyup', () => {
    const cidades = city.value;
    tempo(cidades)
})


