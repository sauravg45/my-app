import React from 'react';
import InputField from './InputField'
class form extends React.Component{

    constructor(){
        super();
        this.state={
            name:'',
            class:''
        }

    }

    onGetInputField=(props)=>{
       // debugger;
        console.log("props=>",props)
    }

    render(){
        return(<>
        <div>
            <h1>
        Fill the Form
        </h1>
        <InputField class={this.onGetInputField} name={this.onGetInputField}/>
        </div>
        </>);
    }
}

export  default form;