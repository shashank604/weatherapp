import React,{useState,useEffect}from 'react'

export default function Tempapp() {
    const [city, setcity] = useState(null)
    const [wind,setwind]=useState(null)
    const [search, setsearch] = useState("Mumbai")
    useEffect(() => {
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b69d86cc1c948e653ac35b00ef6a3e9f`;
            const response=await fetch(url);
            const resjson=await response.json();
            console.log(resjson)
            setcity(resjson.main)
            setwind(resjson.wind)
        }
      fetchApi();
    },[search])
    
  return (
    <div>
        <h1 className='heading'>A Simple Weather Application</h1>
        {/* b69d86cc1c948e653ac35b00ef6a3e9f */}
        <div className="box">
            <div className="inputData">
                <input type="search" className="inputField" placeholder='Enter the City' onChange={(event)=>{setsearch(event.target.value)}}/>
            </div>
        </div>
        {!city?(<p className='info'><h1> No DataFound</h1>
        <h3>Try another city or Check the spelling</h3></p>):
            (<div className="info">
            <h2 className="location">{search}</h2>
            <h1 className="temp">{city.temp}°C</h1>
            <h3 className='tempmin_max'>Min:{city.temp_min}°C</h3>
            <h3> Max:{city.temp_max}°C</h3>
            <h3>Pressure:{city.pressure} millibars</h3>
            <h3>Humidity:{city.humidity}%</h3>
            <h3>Wind:{wind.speed}kmph</h3>
            </div>
            )
        }
    </div>
  )
}
