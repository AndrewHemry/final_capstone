import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentCompany } from "../redux/actions";
import { Link } from "react-router-dom";
import { Table, TableContainer, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const CompanyPicker = (props) => {
    
    const dispatch = useDispatch();

    // This is current updating my State
    const handleCurrentCompany = (company) => {
        const currentCompany = { id: company.company_id, name: company.company_name };
        // console.log("Inside the Handle Function - Pick:", currentCompany)
        dispatch(updateCurrentCompany(currentCompany));
        // setCurrentCompany(currentCompany);
        localStorage.setItem('currentCompany', JSON.stringify(currentCompany))
    };    

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