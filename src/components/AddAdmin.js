import React, { Component, Fragment } from 'react'
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material'

class AddAdmin extends Component {
    state = {
        open: false,
        first_name: '',
        last_name: '',
        email_address: ''
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
        payload.id = this.props.adminTotal + 1
        delete payload.open
        console.log("THE ADMIN", payload)
        this.props.addAdmin(payload)
        // This.setState to close the dialog box once submitted
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                first_name: '',
                last_name: '',
                email_address: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        className="add-admin"
                        onClick={this.toggleDialog}
                    >
                        Add Admin
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Admin</DialogTitle>
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
                                    id="email_address" 
                                    placeholder="Email Address" 
                                    value={this.state.email_address} 
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

export default AddAdmin;