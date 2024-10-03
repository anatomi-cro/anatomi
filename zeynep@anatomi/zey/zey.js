const url = 'https://api.openweathermap.org/data/2.5/'
const key = '720deed6c3f40df8ec41909b0e94e739'

const setQuery = (e) => {
    //entera basma işleminin key kodu 13 dür
    if (e.keyCode == 13) {
        getResults(searchBar.value)
    }
}

const getResults = (cityName) => {
    // console.log(cityName);
    let query = `${url}weather?q=${cityName}&appid=${key}$units=netric$lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResults)
}

const displayResults = (result) => {
    // console.log(result);
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.maim.temp)}C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}C / ${Math.round(result.main.temp_max)}C`



}



const searchBar = document.getElementById('seachBar');
searchBar.addEventListener('keypress', setQuery);