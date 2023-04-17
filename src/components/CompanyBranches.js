import React from "react";
import { Link } from "react-router-dom";
import { Table, TableContainer, TableBody, TableRow, TableCell, Paper } from "@mui/material";


const CompanyBranches = (props) => {

    console.log("The current props inside of the CompanyBranches:", props)
    console.log("The available branches are:", props.branches)
    console.log("The current company name is:", props.current_company.name)
    console.log("The current company ID is:", props.current_company.id)


    return (
        <div className="company-branches">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        {props.branches.map((branch, idx) => (
                            <TableRow
                            key={branch.branch_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link 
                                    className="company-link" 
                                    to={`/company/${props.current_company.id}/branch/${branch.branch_id}`}
                                    >
                                        {branch.branch_name}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CompanyBranches;