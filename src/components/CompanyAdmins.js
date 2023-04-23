import React from "react";
// import { Link } from "react-router-dom";
import { Table, TableHead, TableContainer, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CompanyAdmins = (props) => {

    console.log("The company admins are:", props.admins) 

    const handleDelete = (idx) => {
        props.removeAdmin(idx)
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
                        <TableCell align="left">Remove from Company</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.admins.map((admin, idx) => (
                        <TableRow
                        key={admin.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {/* ACTION ITEM - This can be an admin detail page */}
                            {/* <TableCell component="th" scope="row">
                                <Link className="business-link" to={`/business/${business.id}`}>{business.Name}</Link>
                            </TableCell> */}
                            <TableCell align="left">{admin.first_name}</TableCell>
                            <TableCell align="left">{admin.last_name}</TableCell>
                            <TableCell align="left">{admin.email_address}</TableCell>
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

export default CompanyAdmins;
