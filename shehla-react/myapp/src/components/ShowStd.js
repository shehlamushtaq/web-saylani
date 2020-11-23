import React  from 'react'
class ShowStd extends React.Component {
constructor (props){
    super(props)
    this.state = {
        students:[{name:"hina", age:"30"},{name:"Aisha", age:"32"},{name:"Junaid", age:"35"}]
    }
}
render(){
    return(
        <>
        {this.state.students.filter(item =>item.age>30).map(item =>(
            <>
           
                
                 <h2>{item.name}</h2>
                 <h2>{item.age}</h2>
            </>
        ))}
        </>
    )
}
}
export default ShowStd