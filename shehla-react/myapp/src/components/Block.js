import React from 'react';
class Block extends React.Component {
    
    render (){
       
        let c = this.props.name
        return (
            <>
            <h2 style={{color:c}} >This is My Block of {this.props.name}</h2>
            </>
        )
    }
}
export default Block