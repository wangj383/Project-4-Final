import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './UpdateRequestPage.css'

class UpdateRequestPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.request
  };

  formRef = React.createRef()
  
  handleChange = (e) => {
      const formData = {...this.state.formData, [e.target.name]: e.target.value};
      this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
      });
  }

  handleUrgentChange = (event) =>{
      console.log(event.target.checked)
      this.setState({
          // Have a warning for this..
          formData:{...this.state.formData, urgent: event.target.checked},
          invalidForm: !this.formRef.current.checkValidity()
      })
  }
    
  handleSubmit = e => {
      e.preventDefault();
      this.props.handleUpdateRequest(this.state.formData);
    };

  render() {
      return (
          <div className="UpdateRequestPage">
            <h1>Edit Request</h1>
              <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <div className="col-sm-12">
                          <label>Request Title</label>
                          <input
                          className="form-control"
                          name="title"
                          value={this.state.formData.title}
                          onChange={this.handleChange}
                          required
                          />
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="col-sm-12">
                          <label>Pick Up Time</label>
                          <input
                          className="form-control"
                          name="pickUpTime"
                          value={this.state.formData.pickUpTime}
                          onChange={this.handleChange}
                          required
                          />
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="col-sm-12">
                          <label>Pick Up Address</label>
                          <input
                          className="form-control"
                          name="pickUpAddress"
                          value={this.state.formData.pickUpAddress}
                          onChange={this.handleChange}
                          required
                          />
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="col-sm-12">
                          <label>Destination Address</label>
                          <input
                          className="form-control"
                          name="destinationAddress"
                          value={this.state.formData.destinationAddress}
                          onChange={this.handleChange}
                          required
                          />
                      </div>
                  </div>
                  <div className="form-group">
                      <div className="col-sm-12" >
                          <label htmlFor="urgbox">
                          <input
                              id="urgbox"
                              type="checkbox"
                              checked={this.state.formData.urgent}
                              name="urgent"
                              onChange={this.handleUrgentChange}
                          />
                          <span>Urgent?</span>
                          </label>
                      </div>
                  </div>
                <div className="form-group">
                  <div className="col-sm-12">
                      <label>Additional Notes</label>
                      <input
                      className="form-control"
                      name="notes"
                      value={this.state.formData.notes}
                      onChange={this.handleChange}
                      />
                  </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12" style={{margin:'5%'}}>
                        <button
                            type="submit"
                            className="btn waves-effect waves-light"
                            disabled={this.state.invalidForm}
                            style={{margin:'0'}}
                        >
                            Save
                        </button>
                        <Link to="/requests">&nbsp;&nbsp;&nbsp;&nbsp;Cancel</Link>
                    </div>
                </div>
            </form>
          </div>
      );
  }
};

export default UpdateRequestPage;