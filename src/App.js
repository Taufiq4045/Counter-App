import React from "react";

import "./App.css";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count : 0,
        };
    }

    handleClick1 = () => {
        this.setState({ count : this.state.count +1});
        console.log(this.state.count);
    };

    handleClick2 = () => {
        this.setState({ count : this.state.count -1});
        console.log(this.state.count);
    };

    handleClick3 = () => {
        this.setState({ count : 0 });
        console.log(this.state.count);
    };


    render(){
        return(
            <div className="container">
                <div className="inner-container">
                    <h2>Counter</h2>
                    <input type="text" id="counterDisplay" disabled value={this.state.count}></input>
                    <div className="navigation-btn">
                       <button onClick={this.handleClick1}><b>+</b></button>
                       <button onClick={this.handleClick2}>-</button>
                    </div>
                    <div className="reset-btn">
                    <button onClick={this.handleClick3}>Reset</button>
                    </div>
                </div>
            </div>
             );
    }
}

export default App;