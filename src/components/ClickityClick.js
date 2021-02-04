// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {
    state = {
        hasBeenClicked: false
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled } }) 
    } 

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}