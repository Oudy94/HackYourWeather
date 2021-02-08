
import loadingImage from '../images/loading.gif';
import {useParams, useHistory} from "react-router-dom";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import useFetch from './fetch-data.js'

function WeatherChart() {
    const history = useHistory();
    const { cityId } = useParams();
    const FORECAST_END_POINT = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
    const {data, isLoading, hasError} = useFetch(FORECAST_END_POINT);
    const chartData = data.list ? data.list.map(cast => { return {name: cast.dt_txt, temperature: cast.main.temp}}) : [];

    function handleBack(){
        history.goBack();
    }

    if (hasError) {
        return <h2>Something went wrong...</h2>
    }

    return (
        <div className="chart">
            {isLoading && <img src={loadingImage} alt="loading" className="loading-img" />}
            {data.list && <h1>Cast for {data.city.name}</h1>}
            <AreaChart width={730} height={250} data={chartData}
                margin={{ top: 20, right: 30, bottom: 5, left: 0 }}>
                <defs>
                    <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name"  />
                <YAxis unit="°" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip itemStyle={{color: "#8884d8"}}/>
                <Area type="step" dataKey="temperature" stroke="#8884d8" fillOpacity={1} fill="url(#colorTemp)" unit="°" />
            </AreaChart>
            <button onClick={handleBack} className="backButton fa fa-arrow-left"> Back</button>
        </div>
    );
}

export default WeatherChart;