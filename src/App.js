import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
function App() {

  const apiKey="67de97a7f76ecfff7659760778ba13c8"
  const [inputCity, setInputCity] = useState("");
  const [data, setData]=useState({})
    

  
  const getWetherDetails = (cityName) => {
    if (!cityName) return
    // const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid="+apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }


  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
   
  }


 
  return(
  
   <div className="col-md-12">

    <div className="wetherBg">
     
    <h1 className="heading">Weather Temparature</h1>
    <br /><br />
    <div className="searchbar">
    
      <input type="text" className="form-control" value={inputCity} onChange={handleChangeInput} />
      <br /><br />
      <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
      </div>
</div>
{Object.keys(data).length>0 &&

<div className="col-md-12 text-center mt-5">

<div className="shadow rounded wetherResultBox A">
 <span className="wave1"></span>
<span className="wave2"></span>
<span className="wave3"></span>
  <img className="weathorIcon" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
  <h5 className="weathorCity">{data.name}</h5>
<h6 className="weathorTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C </h6> 


  </div>
</div>

}
</div>
 

  );
}

export default App;