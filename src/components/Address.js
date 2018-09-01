import React from 'react';
 
class Address extends React.Component {
  constructor() {
    super();
 
    this.state = {
      
    }
  } 
 
  render() {
    return (
      <div className="address">
        {this.state.fullAddress}
      </div>
    );
  }
}
 
export default Address;