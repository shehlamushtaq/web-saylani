

import Axios from 'axios'
import React,{useState,useEffect} from 'react'

function Api() {

const [reci, setReci] = useState([])
useEffect(()=>{
    console.log("I am in USe Effect")
    Axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`) 
    .then(res=>{
        console.log(res)
        setReci(res.data.meals[0])
    })

},[])

//===========================================

const myReci = reci ? ( 
                <div> 
                <h1>{reci.strCategory}</h1>
                <p>{reci.strMeal}</p>
                </div>)
                : (<p>Loading</p>)

    return (
        <div>
 
                <h1>{myReci}</h1>

        </div>
    )
}

export default Api
