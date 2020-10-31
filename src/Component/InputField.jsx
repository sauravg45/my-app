import React from 'react';

class Inputfield extends React.Component{
    constructor(){
        super(props);
        this.state={
            name:'',
            class:''
        };
    }

    onChangeName=(event)=>{
        this.setState({
           name: event.target.value
        });
        this.props(this.state.class);
      //  this.props.name(this.state.name);
    }

    onChangeClass=(e)=>{
        this.setState({
            class:e.target.value
        });
        this.props.class(this.state.class);
        this.props.name(this.state.name);
        console.log("Class=>",this.state.class);
    }

    render(){
        return(<>
        <h3>
            Enter Your Name : <input
          type="text"
          onChange={this.onChangeName}
        /><br/>
        Enter Your Class:<input type="text" onChange={this.onChangeClass}/>
        </h3>
        Your name is {this.state.name} and class {this.state.class}.
        </>);
    }
}

export default Inputfield;