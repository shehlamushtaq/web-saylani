import React, { Component } from 'react'

export default class OnOf extends Component {
    constructor (props){
        super(props)
        this.state = {
            bg:"white"
            
        }
    }

    handleOn = () => {
        console.log("on")
            this.setState({
                bg:"white"});
        
        }
    handleOff = () => {
        console.log("on")
            this.setState({
                bg:"black"});
        
        }
    // handleOff = () => {
    //     console.log("off")
        
    // }

    render() {
        return (
            <div style={{backgroundColor:this.state.bg}}>
                <button onClick={this.handleOn}>Click To On </button>
                <button onClick={this.handleOff}>Click To Off </button>
            </div>
        )
    }
}
