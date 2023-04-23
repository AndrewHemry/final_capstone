import React, { Component, Fragment } from 'react'
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material'

class AddBranch extends Component {

    // TODO: Need Company ID, Branch ID, Branch Name
    
    state = {
        open: false,
        branch_name: ''
        // May not need the company_id here
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const currentCompany = JSON.parse(localStorage.getItem('currentCompany'))
        const payload = { ...this.state }
        // The payload ID should be handled by the server so auto-assign the ID, right?
        payload.branch_id = this.props.branchTotal + 1
        payload.company_id = currentCompany.company_id
        delete payload.open
        console.log("THE BRANCH PAYLOD", payload)
        this.props.addBranch(payload)
        // This.setState to close the dialog box once submitted
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                branch_name: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        className="add-branch"
                        onClick={this.toggleDialog}
                    >
                        Add Branch
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Branch</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="branch_name" 
                                    placeholder="Branch Name" 
                                    value={this.state.branch_name} 
                                    onChange={this.handleTextChange} 
                                    required 
                                />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddBranch;