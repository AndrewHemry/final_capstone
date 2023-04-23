import React, { Component, Fragment } from 'react'
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material'

class AddEmployee extends Component {
    state = {
        open: false,
        first_name: '',
        last_name: '',
        employee_email: '',
        job_title: '',
        // ACTION ITEM - Will my database handle this since I'm setting it to default as 'yes' or 1?
        is_active: true
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        // The payload ID should be handled by the server so auto-assign the ID, right?
        payload.id = this.props.employeeTotal + 1
        delete payload.open
        console.log("THE EMPLOYEE PAYLOAD", payload)
        this.props.addEmployee(payload)
        // This.setState to close the dialog box once submitted
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                first_name: '',
                last_name: '',
                employee_email: '',
                job_title: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        className="add-employee"
                        onClick={this.toggleDialog}
                    >
                        Add Employee
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Employee</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="first_name" 
                                    placeholder="First Name" 
                                    value={this.state.first_name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="last_name" 
                                    placeholder="Last Name" 
                                    value={this.state.last_name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="employee_email" 
                                    placeholder="Email Address" 
                                    value={this.state.email_address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="job_title" 
                                    placeholder="Job Title" 
                                    value={this.state.job_title} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddEmployee;