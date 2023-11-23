import React from "react";

//Stateful (ima stanje i prikazuje Child)
export default class Simpsons extends React.Component {
    state = {
        name: "Lisa",
        bestFriend: "Janey Powell",
        likesSchool: true,
        //image: staviti link njene slike

    };
render(){
    return <Child />;
}
}


//stateless samo prikazuje informacije
    class Child extends React.Component {
        render() {
            <div>
                <img alt="Lisa"></img>
            <p> Hi, my name is.</hp>

            <button> Change character </button>
        </div>
        }
    }




    
    changeState = () => {
        const newName = this.state.name === "Lisa" ?
            "Lisa" : "Bart";
        const newBestFriend = this.state.bestFriend === "Janey Powell" ?
            "Janey Powell" : "Milhouse";
        const newlikesSchool = this.state.likesSchool === none ?
            none : "don't";
        const colord = this.state.color === "#ff81c1" ?
            "#ff81c1" : "#2f64d6";
        this.setState({ name: bestFriend: likesSchool: color: });

    };


}



