import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CreateForm.css'

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
                seats: '',
                urgent: false,
                notes:'',
                host: this.props.user._id,
                driver: undefined,
                rider: [this.props.user._id],
                organization: this.props.user.organization,
                
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
            formData:{...this.state.formData, urgent: event.target.checked},
            invalidForm: !this.formRef.current.checkValidity()
        })
    }
    handleDriverChange = (event) =>{
        console.log(event.target.checked)
        this.setState({
            formData:{ ...this.state.formData, 
                    driver: event.target.checked? this.props.user._id: undefined, 
                    rider: event.target.checked ? undefined : [this.props.user._id]
            },
            invalidForm: !this.formRef.current.checkValidity()
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleCreateRequest(this.state.formData);
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
                        <div className="col-sm-12" >
                            <label>
                            <input
                                type="checkbox"
                                checked={!!this.state.formData.driver}
                                name="driver"
                                onChange={this.handleDriverChange}
                            />
                            <span style={{fontSize:"16px"}}>I am the driver</span>
                            </label>
                        </div>
                    </div>
                    {this.state.formData.driver
                    ?
                    <div className="transition">
                        {this.props.user.car.make
                        ?
                        <>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label style={{fontSize:'18px', marginTop:"5%"}}>Please Confirm Your Car Information:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Make"
                                        value={this.props.user.car.make}
                                        name="make"
                                        onChange={this.handleCarChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Model"
                                        value={this.props.user.car.model}
                                        name="model"
                                        onChange={this.handleCarChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Plate Number"
                                        value={this.props.user.car.licencePlate}
                                        name="licencePlate"
                                        onChange={this.handleCarChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Color"
                                        value={this.props.user.car.color}
                                        name="color"
                                        onChange={this.handleCarChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Seating Capacity"
                                        value={this.props.user.car.passengerCapacity}
                                        name="passengerCapacity"
                                        onChange={this.handleCarChange}
                                    />
                                </div>
                            </div>
                        </>
                        : 
                        <>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label style={{fontSize:'18px', marginTop:"5%"}}>Please Enter Your Car Information:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Make"
                                        value={this.props.user.car.make}
                                        name="make"
                                        onChange={this.handleCarChange}
                                        required
                                    />
                                    
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Model"
                                        value={this.props.user.car.model}
                                        name="model"
                                        onChange={this.handleCarChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Plate Number"
                                        value={this.props.user.car.licencePlate}
                                        name="licencePlate"
                                        onChange={this.handleCarChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Color"
                                        value={this.props.user.car.color}
                                        name="color"
                                        onChange={this.handleCarChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Maximum Passenger Capacity"
                                        value={this.props.user.car.passengerCapacity}
                                        name="passengerCapacity"
                                        onChange={this.handleCarChange}
                                        required
                                    />
                                </div>
                            </div>
                        </>
                        }
                    </div>
                    :
                    <></>
                    }

                    <div className="form-group" >
                        <div className="col-sm-12" >
                            <label htmlFor="urgbox">
                            <input
                                id="urgbox"
                                type="checkbox"
                                checked={this.state.formData.urgent}
                                name="urgent"
                                onChange={this.handleUrgentChange}
                            />
                            <span style={{fontSize:"16px"}}>Urgent?</span>
                            <br />
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12" style={{marginTop:"10%"}}>
                            <button
                                type="submit"
                                className="btn waves-effect waves-light"
                                disabled={this.state.invalidForm}
                                style={{margin:"0 5%"}}
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