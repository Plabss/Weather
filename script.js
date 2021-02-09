function getData(city_name, API_key) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${API_key}`
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data))
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
    const city_name = document.getElementById("city_name").value;
    const API_key = "cf58456dc01b18a489c9e0a069606937"
    getData(city_name, API_key);
})


function showData(data) {
    console.log(data)
    const div = document.getElementById("resultDiv")
    div.innerHTML = `
            <img id="img" alt="">
            <h1 id="city">${data.name}</h1>
            <h3><span>${data.main.temp}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
            
    `
    showIcon(data.weather[0].icon);
}

function showIcon(dataIcon) {
    document.getElementById("img").setAttribute('src', `https://openweathermap.org/img/wn/${dataIcon}@2x.png`)
}