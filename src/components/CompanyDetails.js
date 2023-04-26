import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Tabs, Tab, TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import CompanyEmployees from "./CompanyEmployees"
import CompanyAdmins from "./CompanyAdmins"

const CompanyDetails = (props) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleInactivateEmployee = (employee) => {
        console.log("The current ID is:", employee)
        props.inactivateEmployee(employee)
    };

    const handleRemoveAdmin = (admin) => {
        console.log("The current ID is:", admin)
        props.removeAdmin(admin)
    }

    return (

    <div className="branch-list-body">
        <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Company Employees" />
            <Tab label="Company Admins" />
            <Tab label="Inactive Employees" />
        </Tabs>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        {activeTab === 0 || activeTab === 2 ? (
                            <TableCell>Job Title</TableCell>
                        ) : ( 
                            null 
                        )}
                        {activeTab === 1 ? (
                            <TableCell>Remove from Company</TableCell>
                        ) : ( 
                            null 
                        )}
                        {activeTab === 0 ? (
                            <TableCell align="left">Inactivate</TableCell>
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
                            <CompanyEmployees
                                key={employee.id}
                                employee={employee}
                                activeTab={activeTab}
                                inactivateEmployee={handleInactivateEmployee}
                             />
                        ))}
                    </TableBody>
                )}
                {/* ADMIN LIST */}
                {activeTab === 1 && (
                    <TableBody>
                        {props.admins
                        .map((admin) => (
                            <CompanyAdmins 
                                key={admin.id}
                                admin={admin}
                                activeTab={activeTab}
                                removeAdmin={handleRemoveAdmin}
                            />
                        ))}
                    </TableBody>
                )}
                {/* INACTIVE LIST */}
                {activeTab === 2 && (
                    <TableBody>
                        {props.employees
                        .filter((employee) => employee.is_active === false)
                        .map((employee) => (
                            <CompanyEmployees 
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

export default CompanyDetails;

 // <div>
        //     <Tabs value={activeTab} onChange={handleTabChange}>
        //         <Tab label="Company Employees" />
        //         <Tab label="Company Admins" />
        //         <Tab label="Inactive Employees" />
        //     </Tabs>
        //     {activeTab === 0 && (
        //         <CompanyEmployees employees={props.employees}/>
        //     )}
        //     {activeTab === 1 && (
        //         <CompanyAdmins 
        //             admins={props.admins}
        //         />
        //     )}
        //     {activeTab === 2 && (
        //         <TableBody>
        //             {props.inactiveEmployees.map((employee, idx) => (
        //                 <TableRow key={employee.id}>
        //                     // Render inactiveEmployees data here
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     )}
        // </div>
