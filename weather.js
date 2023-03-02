let search = document.getElementById("search"); //input tag
let cityName = document.getElementById("cityName"); 
let temp = document.getElementById("temp"); 

let getInfo = async (e) => {
    let inputValue=search.value
    if (inputValue == "") {
        alert("please enter a city name before search")//error message
    }
    else {
        //fetch data from api
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response = await fetch(url)
        let data = await response.json()//fetching only json from api response
        cityName.textContent = `${data.name} / ${data.sys.country}`
        temp.textContent=data.main.temp
        
    }
}

