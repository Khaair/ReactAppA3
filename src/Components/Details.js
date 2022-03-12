import React from 'react'

class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: ""
        }
    };



    eventHandle = ()=>{
        var x = "Kamal"
        var y = 24
        this.setState({ name: x })
        this.setState({ age: y })

    }
    render() {
        return (
            <div>

                <h1>
                    My name is {this.state.name} and Age is {this.state.age}

                    <button onClick={this.myfunction.bind(this)}>Change</button><br></br>

                    
                 <input onChange={this.eventHandle} type="text" placeholder='Enter text'></input><br></br>
                 <input type="submit"></input>
                
                </h1>



            </div>
        );
    }
};

export default Details