import {useState} from 'react';
import useFetch from './fetch-data.js'
import SearchBox from './search-box.js'
import CityWeatherDetails from './city-weather-details.js'

function Main() {
    const [searchCityName, setSearchCityName] = useState("");
    const WEATHER_END_POINT = searchCityName.length > 0 && `https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
    const {data, isLoading, hasError} = useFetch(WEATHER_END_POINT);

    return (
        <div className="container">
            <div className="title-section">
                <h1>Weather</h1>
            </div>
            <div className="search-section">
                <SearchBox setSearchCityName={setSearchCityName} />
            </div>
            <div className="details-section">
                <CityWeatherDetails data={data} isLoading={isLoading} hasError={hasError} setSearchCityName={setSearchCityName} />
            </div>
        </div>
    );
}

export default Main;