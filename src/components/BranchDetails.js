import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Tabs, Tab, TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import BranchEmployees from "./BranchEmployees"

const BranchDetails = (props) => {

    const [activeTab, setActiveTab] = useState(0);
    // ACTION ITEM - I have a feeling that I should be storing the state of the branch directory here...

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleRemoveEmployee = (employee) => {
        console.log("The current ID is:", employee)
        props.removeEmployee(employee)
    };

    return (

        <div className="branch-list-body">
            <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab label="Branch Employees" />
                <Tab label="Inactive Employees" />
            </Tabs>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Job Title</TableCell>
                            {activeTab === 0 ? (
                                <TableCell align="left">Remove from Branch</TableCell>
                            ) : ( 
                                null 
                            )}
                        </TableRow>
                    </TableHead>
                    {/* ACTIVE LIST */}
                    {activeTab === 0 && (
                        <TableBody>
                            {props.employees
                            .filter((employee) => employee.is_active === true)
                            .map((employee) => (
                                <BranchEmployees
                                    key={employee.id}
                                    employee={employee}
                                    activeTab={activeTab}
                                    removeEmployee={handleRemoveEmployee}
                                 />
                            ))}
                        </TableBody>
                    )}
                    {/* INACTIVE LIST */}
                    {activeTab === 1 && (
                        <TableBody>
                            {props.employees
                            .filter((employee) => employee.is_active === false)
                            .map((employee) => (
                                <BranchEmployees 
                                    key={employee.id}
                                    employee={employee}
                                    activeTab={activeTab}
                                />
                            ))}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </div>

    )
}

export default BranchDetails;

 // <TableBody>
                        // {props.employees
                        // .filter((employee) => employee.is_active === true)
                        // .map((employee, idx) => {
                        //     console.log("Active Employee Key:", employee.id);
                        //     return (
                        //     <BranchEmployees 
                        //         // key={employee.id}
                        //         idx={idx}
                        //         employee={employee}
                        //         activeTab={activeTab}
                        //         removeEmployee={handleRemoveEmployee}
                        //     />
                        //         )
                        //     })
                        // }
// </TableBody>

// <TableBody>
                        // {props.employees
                        // .filter((employee) => employee.is_active === false)
                        // .map((employee, idx) => {
                        //     console.log("Inactive Employee Key:", employee.id);
                        //     console.log("Inactive Employee Index:", idx);
                        //     return (
                        //     <BranchEmployees 
                        //         // key={employee.id}
                        //         idx={idx}
                        //         employee={employee}
                        //         activeTab={activeTab}
                        //     />
                        //         )
                        //     })
                        // }
// </TableBody>