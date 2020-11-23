import React from 'react';
class SideBar extends React.Component {
    render (){
        // console.console.log(this.props.name);
        return (
            <>
            <h2>This is My side Bar</h2>
            <h3>Welcome {this.props.name} </h3>
            </>
        )
    }
}
export default SideBar