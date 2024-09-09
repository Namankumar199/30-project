// const fullurl = "https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=f33a484cf794d08d0148764789aaba32";

const searchBtn = document.getElementById('search-btn');

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

searchBtn.addEventListener('click', () => {

    let val = document.getElementById('search-input').value;

    if (val) {
        weather(val);
        document.getElementById('search-input').value = "";
        // console.log(val);

    } else {
        alert('please Insert Value in input box')
        console.log('Missing values.')
    }

})


const weather = async (val) => {

    const inputValue = `?q=${val}`;

    const response = await fetch(URL + inputValue + "&appid=" + API_KEY);



    if (response.status == 200) {
        const result = await response.json();

        const weatherType = (result.weather[0].main).toLowerCase();

        document.querySelector('.weather-box').style.display = 'flex';

        document.querySelector('.temp').innerText = result.main.temp + " °C";
        document.querySelector('.place').innerText = result.name;
        document.querySelector('.humidity-percentage').innerText = result.main.humidity + " %";
        document.querySelector('.wind-speed').innerText = result.wind.speed + " Km/h";

        document.querySelector('.weather-img').src = `assests/${weatherType}.png`;

    } else {
        console.log('City Not Found');
        document.querySelector('.error span').style.display = 'block';

        setTimeout(() => {
            document.querySelector('.error span').style.display = 'none';
        }, 2000);

    }
}
