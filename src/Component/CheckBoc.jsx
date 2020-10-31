import React from 'react';

function IsCheckedHandler2() {
        console.log("Outside Class !");
}
var a = 50;

class CheckBox extends React.Component {
    constructor() {
      super();
      this.state = {checked1:''};
    }

    IsCheckedHandler = (e) => {

        console.log("Event =>",e);


        this.setState({
            checked1: e.target.value
        })
    }


    render() {
      return (
          <>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={(e) => this.IsCheckedHandler(e)}/>
  <label for="vehicle1"> I have a bike</label><br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onClick={(e) => this.IsCheckedHandler(e)}/>
  <label for="vehicle2"> I have a car</label><br></br>
      <div>Selected value is: {this.state.checked1}</div>
          </>
      );
    }
  }
  
export default CheckBox;
