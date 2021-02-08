import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, createContext } from "react";
import './App.css';
import Main from './components/main.js'
import WeatherChart from './components/city-weather-chart.js'

export const CitiesContext = createContext();

function App() {
    //I put the state in the parent component because I don't want the state to get reset when changing between routes.
    const [citiesData, setCitiesData] = useState([]);

    return (
        <CitiesContext.Provider value={{citiesData, setCitiesData}}>
            <Router>
                <Switch>
                    <Route path="/:cityId" component={WeatherChart} />
                    <Route exact path="/" component={Main} />
                </Switch>
            </Router>
        </CitiesContext.Provider>
    );
}

export default App;
