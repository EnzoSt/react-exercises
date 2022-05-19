import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        username: ""
    }

    handleInputChange = (event) => {
        const value = event.target.value

        this.setState({
            username: value
        })
    }

    render() {
        return (
            <div>
                <Welcome name={this.state.username} age={18} />
                <input name="username" value={this.state.value} onChange={this.handleInputChange}></input>
            </div>
        )
    }
}