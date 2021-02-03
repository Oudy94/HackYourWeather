import {useState} from 'react';

function SearchBox({setSearchCityName}) {
    const [inputCityName, setInputCityName] = useState("");

    const handleSubmit = () => {
        inputCityName.length > 1 ? setSearchCityName(inputCityName): alert("Write a city name in the search box.");
        // document.getElementById("searchButtonId").disabled = true;
    }

    const handleChange = event => {
        setInputCityName(event.target.value);
        // document.getElementById("searchButtonId").disabled = false;
    }

    const inputPressEnter = event => { event.key === 'Enter' && document.getElementById("searchButtonId").click() }

    return (
        <div className="Search-bar">
            <input className="Search-input" type="text" placeholder="Search city..." name="search-city" value={inputCityName} onChange={handleChange} onKeyPress={inputPressEnter} />
            <div className="Search-icon">
                <button className="fa fa-search search-button" id="searchButtonId" onClick={handleSubmit} />
            </div>
        </div>
    );
}

export default SearchBox;
