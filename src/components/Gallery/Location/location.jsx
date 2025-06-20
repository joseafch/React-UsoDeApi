import { useEffect,useState  } from "react"
import axios from 'axios';

export default function LocationCharacter({locationURL}){
    // console.log("localizacion URL",locationURL)
    const[locationData,setLocation]=useState(null)

  useEffect(() => {
    if (locationURL) {
      getLocation();
    }
  }, [locationURL]);
    
    const getLocation = ()=>{
        axios(locationURL)
        .then (res=>{
            setLocation(res.data)
            // console.log("ELPLANETa",res.data)

        })
        
    }

// console.log ("resdelocate",locationData)
return (
    <div>

            <div >
                <div>
                    <ul>
                    <li>type: {locationData?.type}</li>
                    <li>name: {locationData?.name}</li>
                    <li>dimension: {locationData?.dimension}</li>
                    </ul>
                </div>

            </div>


    </div>
)

}