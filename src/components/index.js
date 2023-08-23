import React from "react";
import {Component} from "react";

class OpenButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.actionBtn}>
                    {this.props.name}
                </button>
            </div>
        );
    }
}

export default OpenButton;