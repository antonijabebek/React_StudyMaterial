import React from "react";

//statefull component - this is a parent
export default class FootballResult extends React.Component {
    state = {
        hajduk: 0,
        dinamo: 0,
    };

    changeHajdukResult = () => {
        this.setState ({ hajduk: this.state.hajduk + 1});
    };

    changeDinamoResult = () => {
        this.setState ({ dinamo: this.state.dinamo + 1});
    };

    render() {
        return <showResult hajduk={this.state.hajduk} 
        dinamo={this.state.dinamo} 
        dinamoScored={this.changeDinamoResult}
        hajdukScored={this.changeHajdukResult}/>;
    }
}

//stateless component - this is a child component

function showResult({dinamo, hajduk, dinamoScored, hajdukScored}) {
    return (
        <>
        <p> Current result of the game is: {dinamo} (Dinamo) {Hajduk} (hajduk)</p>
        <button> Dinamo Scored</button>
        <button> hajduk Scored</button>
        </>
    )
}