import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentCompany } from "../redux/actions";
import { Link } from "react-router-dom";
import { Table, TableContainer, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const CompanyPicker = (props) => {
    
    const dispatch = useDispatch();

    const handleCurrentCompany = (company) => {
        const currentCompany = { id: company.company_id, name: company.company_name };
        dispatch(updateCurrentCompany(currentCompany));
    };

    console.log("The current props inside of the CompanyPicker:", props)
    console.log("The props for the available_companies", props.available_companies)

    return (
        <div className="company-picker">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        {props.available_companies.map((company, idx) => (
                            <TableRow
                            key={company.company_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {/* Idea behind this is to update the global state after a company is selected */}
                                    <Link 
                                    className="company-link" 
                                    to={`/company/${company.company_id}`}
                                    onClick={() => handleCurrentCompany(company)}
                                    >
                                        {company.company_name}
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

export default CompanyPicker;