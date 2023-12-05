import {useEffect} from 'react'


export default function Search_Weather() {
  const fetchTodayWeather = async () => {
    const apiKey = "b2a3b52aded2be8f63c9c9b521271bef";
    let parameters = "&units=imperial";
    const baseSearch = "https://api.openweathermap.org/data/2.5/weather";
    // let requestUrl =
    //   baseSearch + "?q=" + city + "&appid=" + apiKey + parameters;
    const hardCodeApi =
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b2a3b52aded2be8f63c9c9b521271bef";

    try {
      const response = await fetch(hardCodeApi);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTodayWeather();
  }, []);
}
