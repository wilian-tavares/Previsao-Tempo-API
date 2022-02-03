// const chave = '8bcc6a8c69b996b7302141521d37b84a';
// const pais = 55;
// const cep = 49030650;
// const cidade = 'Aracaju'

//const city = prompt('Digite a cidade')

const city = document.getElementById('form-cidade');
city.addEventListener('onmouseover',)


// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Aracaju&units=metric&appid=3d6a3d1fc18e2c50061da8437fb6b0b9'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3d6a3d1fc18e2c50061da8437fb6b0b9`


async function dbd() {
    try {
        const data = await fetch(url)
        const json = await data.json();


        console.log(json);
        console.log(json.name)

        const cidade = json.cidade;
        const pais = json.sys.country;

        const temperaturaAtual = json.main.temp;
        const maxima = json.main.temp_max;
        const minima = json.main.temp_min;


        console.log(`Atual: ${temperaturaAtual} 
                        \nMinima: ${minima}° 
                        \nMáxima: ${maxima}°`)
        console.log(pais)


    } catch (error) {
        console.log(error);
    }
}
dbd()

