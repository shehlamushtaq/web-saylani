import React,{useState} from 'react'

function Room(props) {
    const [isLit, setLit] = useState(true)
    let [num, setNum] = useState(0)

    let [on1, setOn] = useState()
    
    let [temprature, setTemprature] = useState(72)
    
    return (
       <div className={`default ${on1 ? 'on':'off'} `} >
         {/* {isLit ? ("open the lit "):("Close the lit ")}

            <button onClick={() => setLit(!isLit)}>Click to Change</button>
            <br/>
            {<h1>{num}</h1>}
            <button onClick={() => setNum(++num)}>Click to Add  </button>
            <br/> */}

            {/* <h2>Temperature = {temprature}'C</h2> */}

            <button onClick={() => setTemprature(++temprature)}> +  </button>
            <h2>Temperature {props.title} = {temprature}'C</h2>
            <button onClick={() => setTemprature(--temprature)}> -  </button>
<br/>
<br/>
<br/>
<br/>
<br/>
            <button onClick={() => setOn(true)}>On  </button>
            <button onClick={() => setOn(false)}>Off </button>

            
</div>            
    )
}

export default Room
