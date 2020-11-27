import React, { Component } from 'react'

export default class PlusMinus extends Component {
    constructor (props){
        super(props)
        this.state = {
            num : 0
        }

    }
    handleplus = () => {
        // console.log("plus")
        let newnum = this.state.num
        this.setState({
            num : ++newnum
        })
    }
    handleminus = () => {
        // console.log("Minus")
        let newnum = this.state.num
        this.setState({
            num : --newnum
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.handleplus} >Addtion by 1</button>            
                <button onClick={this.handleminus} >Subtraction by 1</button>            
                      
            </div>
        )
    }
}
