import react, { useEffect, useState } from "react"


import cloudimg from '../Components/img/bg-clouds.jpg'
import Haze_img from "../Components/img/delhi-cold.jpg"
import thunder_img from "../Components/img/15034.jpg"
import drizil from "../Components/img/76d91cda1d534539a2d0899dd21e421e.png"
import sunny from "../Components/img/sunny.jpg"
import rain from "../Components/img/rain-umbrella-vancouver-weather.jpg;w=960.jpg"
import snow from "../Components/img/snow.jpg"

import sunny_ved from '../Components/Vedios/Timelapse from sunny to storm to sunny in 2 minutes at Modena 2 Tower.mp4'
import Thunder_ved from "../Components/Vedios/thunder.mp4"
import Rain from "../Components/Vedios/rain.mp4"
import Clouds from "../Components/Vedios/Cloudy Weather - Time Lapse.mp4"



const api = {
    key: "f6cffe986f97518b013c731cba9ec6c8",
    base: "https://api.openweathermap.org/data/2.5/"
}


const Home = () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    var tempDate = new Date();
    var date = tempDate.getDate()
    const currDate = date;

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var d = new Date();
    var month = month[d.getMonth()];

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [icon, seticon] = useState();
    const [img, setimg] = useState();
    const [ved, setved] = useState();
    

    const btnClick = () => {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                const vali = result;
                var a=vali.weather[0].main
                console.log(a);
                if (vali.weather[0].main==="Clouds"){
                    seticon(<i class="fas fa-cloud Clouds"></i>)
                    setimg(cloudimg)
                    setved(Clouds)
                }
                else if(vali.weather[0].main==="Clear"){
                    seticon(<i class="fas fa-sun Clear"></i>)
                    setimg(sunny)
                    setved(sunny_ved)
                }
                else if (vali.weather[0].main==="Snow"){
                    seticon(<i class="far fa-snowflake Snow"></i>)
                    setimg(snow)
                    setved()
                }
                else if (vali.weather[0].main==="Rain"){
                    seticon(<i class="fas fa-cloud-showers-heavy Rain"></i>)
                    setimg(rain)
                    setved(Rain)
                }
                else if (vali.weather[0].main==="Drizzle"){
                    seticon(<i class="fas fa-cloud-rain Drizzle"></i>)
                    setimg(drizil)
                    setved(Rain)
                }
                else if (vali.weather[0].main==="Thunderstorm"){
                    seticon(<i class="fas fa-bolt Thunderstorm"></i>)
                    setimg(thunder_img)
                    setved(Thunder_ved)
                }
                else{
                    seticon(<i class="fas fa-smog Smog"></i>)
                    setimg(Haze_img)
                    setved()
                }
            }
            );
            
    }
  
   
    return (
        <>
   
        <div className="main" 
                        >

            <div className="containere">
                <h3 className='WA'>Weather App</h3>
            <div className="input">
                <input type="text"
                    className="form"
                    placeholder="Enter City...🔍"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />

                <div className="input-group-append">
                    <button className="btn" type="button" onClick={btnClick}>Serach</button>
                </div>


               
            </div>
</div>

            {(typeof weather.main != "undefined") ? (
            
                    <div className="location" style={{
                        backgroundImage:`url(${img})`,
                        backgroundSize: "cover",
                        
                      }} >
                       
                    
                        <div className='date'>
                            <h5 className='days'>{n}</h5>
                            <h5 className='montha'>{currDate}<span>{month}</span></h5>
                        </div>
                        <div className='city_img'>
                            <h3 className='Cityname'>{weather.name},{weather.sys.country}</h3>
                            <h5>{icon}</h5>
                        </div>

                        <div className='temp'>
                            <h4 className='temp_h4'> {Math.round(weather.main.temp)}<sup>o</sup>C
                            <h5>{weather.weather[0].main}</h5>
                           
                            </h4>
                           
                        </div>

                        <div className='winds'>
                            
                            <h5><i class="fas fa-arrow-up"></i> {weather.main.temp_max}<sup>o</sup>C</h5>
                            <h5><i class="fas fa-arrow-down"></i> {weather.main.temp_min}  <sup>o</sup>C</h5>
                            {/* <h5><i class="fas fa-wind"></i>{weather.wind.speed}</h5> */}
                        </div>
                    </div>
                
            ) : (
                <div className="error">Start Your Search</div>
            )}</div>
   
        </>
    )
}

export default Home;

