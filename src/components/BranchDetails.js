import React from "react";
// import { Link } from "react-router-dom";
import { Table, TableHead, TableContainer, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BranchDetails = (props) => {

    console.log("The branch employees are:", props.employees)

    const handleDelete = (idx) => {
        props.removeBusiness(idx)
      };

    return (

        // I don't need Redux at all but it is good practice - I should call on my API router here to generate the Branch Directory using fetch or axios THEN update the local state on this page

        <div className="list-body">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Job Title</TableCell>
                        <TableCell align="left">Active Status</TableCell>
                        <TableCell align="left">Remove from Branch</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.employees.map((employee, idx) => (
                        <TableRow
                        key={employee.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {/* ACTION ITEM - This can be an employee detail page */}
                            {/* <TableCell component="th" scope="row">
                                <Link className="business-link" to={`/business/${business.id}`}>{business.Name}</Link>
                            </TableCell> */}
                            <TableCell align="left">{employee.first_name}</TableCell>
                            <TableCell align="left">{employee.last_name}</TableCell>
                            <TableCell align="left">{employee.employee_email}</TableCell>
                            <TableCell align="left">{employee.job_title}</TableCell>
                            {employee.is_active === true ? (
                                <TableCell align="left">Active</TableCell>
                            ) : (
                                <TableCell align="left">False</TableCell>
                            )}
                            <TableCell align="left">
                                <DeleteIcon
                                    onClick={() => handleDelete(idx)}
                                    className="icon text-red"
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BranchDetails;
