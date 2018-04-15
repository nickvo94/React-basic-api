import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter: 0}; 
    }

    increase = () => {
        this.setState((prevState)=>{ 
            return{counter: prevState.counter +1}
        })
    }

    decrease = () => {
        this.setState((prevState)=>{ 
            return{counter: prevState.counter -1}
        })
    }

    reset = () => {
        this.setState((prevState)=>{ 
            return{counter: 0}
        })
    }


    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <div>Counter: {this.state.counter}</div>
                <div className="Counter">
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
                <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }

}

export default Counter;