import React from "react";


export default class Yoda extends React.Components {
    state = {
        name: "Yoda",
    };


render() {
    return <BabyYoda name={this.state.name} />;
}
}

class BabyYoda extends React.Component {
    render() {
        return <h1> {this.props.name}, I am.</h1>
    }
}