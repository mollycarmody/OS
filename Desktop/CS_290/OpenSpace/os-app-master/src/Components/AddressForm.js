import React from 'react';
import { MDBRow, MDBContainer, MDBInput, MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import Form from 'react-bootstrap/Form';
import '../Styles/AddressForm.css';

export class AddressForm extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="addressform-main">
        <MDBRow>
          <MDBCol>
            <MDBInput
              onChange={(event)=>this.props.handleChange(event, 'street')}
              label="Street Address (include APT, etc)"
              group
              type="text"
              validate
              required
            />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <MDBInput
              onChange={(event)=>this.props.handleChange(event, 'city')}
              label="City"
              group
              type="text"
              name="city"
              validate
              required
            />
          </MDBCol>

          <MDBCol id="addressform-statesCol">
            <Form.Control  as="select" id="addressform-states" onChange={(event)=>this.props.handleChange(event, 'state')}>
              <option>State..</option>
              <option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option>
            </Form.Control>
          </MDBCol>

          <MDBCol>
            <MDBInput
              onChange={(event)=>this.props.handleChange(event, 'zip')}
              label="Zip"
              group
              type="number"
              name="zip"
              validate
              required
            />
          </MDBCol>
        </MDBRow>
    </div>
    );
  }
}
export default AddressForm;
