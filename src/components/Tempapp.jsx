import React,{useState,useEffect} from 'react';
import './css/style.css'

const Tempapp = () => {
    const degree = '#x2103;'
    const [city, setcity] = useState(null)
    const [search,setsearch] = useState("bokaro")

    useEffect(()=>{
        const fetchapi = async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=78d2f1e030f5db8f9bcb565d1e5d5368`;
            const response = await fetch(url);
            const resjson = await response.json();
            setcity(resjson.main)
        }

        fetchapi()
    },[search])





    return(
        <>
        <div className="center-div shadow-lg">
           <div className="p-1 bg-light rah  shadow-sm mb-4">
            <div className="input-group">
              <input
               type="search"
                placeholder="Search your city!!!"
                aria-describedby="button-addon2"
                className=" form-control border-0 bg-light"
                onChange={(e)=>{
                    setsearch(e.target.value)
                }}

                  />
            </div>
          </div>

          {!city ? (
              <p>No Data Found</p>
          ) : (
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
              <i className="fas fa-street-view mt-5"></i><h2 className="city">{search}</h2>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                  <h5>{city.temp} &#8451;</h5>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                  <h6>max - {city.temp_max} &#x2103; |min -  {city.temp_min}&#x2103;</h6>
              </div>
          </div>
          )}
          
        </div>

        </>
    )
}

export default Tempapp;