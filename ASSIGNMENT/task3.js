//array weather
const weather = [
    {cityname:"Mumbai",temperature:25,condition:"Cloudy"},
    {cityname:"Anand",temperature:30,condition:"Rainy"},
    {cityname:"Nadiad",temperature:40,condition:"Sunny"}
]


//function to add the weather
const addWeather = (weather,new_weather) => {
    weather.push(new_weather)
}

addWeather(weather,{cityname:"Goa",temperature:20,condition:"Sunny"})
console.log(weather)


//function to find the hottest city from the array
const hottestCity = (weather) =>{
    return weather.reduce((hottest,weather) => weather.temperature > hottest.temperature ? weather : hottest)
}

console.log(hottestCity(weather))


//fucntion to get the city by its condition
const getCity = (weather,condition) =>{
    return weather.filter(weather => weather.condition === condition)
}

console.log(getCity(weather,"Sunny"))


//display all the cities by using the map function
const getCities = (weather) => {
    return weather.map((weather)=> `City : ${weather.cityname} , Temp : ${weather.temperature}°C`);
};

console.log(getCities(weather))


//function to get the hottest city by using the destructuring
const cityDetail = (weather) => {
    return weather.reduce((hottest, current) =>
        current.temperature > hottest.temperature ? current : hottest
    );
};

const { cityname, temperature, condition } = cityDetail(weather);
console.log(`Hottest City: ${cityname}, Temperature: ${temperature}°C, Condition: ${condition}`);



//display all the cities by using the template literals
weather.forEach(weather => {
    console.log(`City Name: ${weather.cityname}, Temperature: ${weather.temperature}°C, Condition : ${weather.condition}`)
})