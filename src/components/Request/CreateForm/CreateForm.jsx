import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidForm: true,
            formData: {
                title:'',
                pickUpTime: '',
                pickUpAddress: '',
                destinationAddress: '',
                driver: false,
                seats: '',
                urgent: false,
                notes:'',
                host: this.props.user._id
            }
        }
    }
   
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
    handleDriverChange = (event) =>{
        console.log(event.target.checked)
        this.setState({
            // Have a warning for this..
            formData:{...this.state.formData, driver: event.target.checked? this.props.user._id: undefined},
            invalidForm: !this.formRef.current.checkValidity()
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        try{
            await this.props.handleCreateRequest(this.state.formData);
            this.props.history.push('/requests');
        } catch(err){
            this.props.updateMessage(err.message);
        }
      };

    render() {
        return (
            <div className="CreateForm">
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
                        <div className="col-sm-12">
                            <label>I am the driver</label>
                            <input
                                type="checkbox"
                                checked={!!this.state.formData.driver}
                                name="driver"
                                onChange={this.handleDriverChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Notes</label>
                            <input
                            className="form-control"
                            name="notes"
                            value={this.state.formData.notes}
                            onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <label>Urgent?
                            <input
                                type="checkbox"
                                checked={this.state.formData.urgent}
                                name="urgent"
                                onChange={this.handleUrgentChange}
                            />
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <button
                                type="submit"
                                className="btn"
                                disabled={this.state.invalidForm}
                            >
                                Create Now
                            </button>
                            <Link to="/requests">Cancel</Link>
                        </div>
                    </div>
                    </form>
            </div>
        );
    }
}

export default CreateForm