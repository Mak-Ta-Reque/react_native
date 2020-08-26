const WETHER_API_KEY = "9388aaa006d036ef32a7bbfa8b4d212d";
const API_STEM = "https://api.openweathermap.org/data/2.5/weather?";


function zipUrl(zip){
    let url = `${API_STEM}q=${zip}&units=imperial&APPID=${WETHER_API_KEY}`;
    console.log(url);
    return `${API_STEM}q=${zip}&units=imperial&APPID=${WETHER_API_KEY}`;
}

function fetchForacast(zip){
    return fetch(zipUrl(zip))
    .then(response => response.json())
    .then(responseJSON => {

        return {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
        };
    })
    .catch(error => {
        console.error(error);
    });
}
export default {fetchForacast: fetchForacast};