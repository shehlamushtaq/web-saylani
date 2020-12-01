import axios from 'axios'
import React,{useState , useEffect} from 'react'
import MediaCard from './MediaCard'



function Api() {
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeaths] = useState(0)
    
    useEffect(() => {
        axios.get("https://covid19.mathdro.id/api")
        .then(res=>{
                console.log(res.data)
                console.log(res.data.confirmed.value)
    
                setConfirmed(res.data.confirmed.value)
                setRecovered(res.data.recovered.value)
                setDeaths(res.data.deaths.value)

        })  
    }, [])
    return (
        <div>
           <MediaCard text='Confirmed Cases' value={confirmed } color="pink" />
           <MediaCard text='Recovered Cases' value={recovered } color="grey"/>
           <MediaCard text='Deaths Cases' value={deaths} color="offWhite"/>

        </div>
    )
}

export default Api
