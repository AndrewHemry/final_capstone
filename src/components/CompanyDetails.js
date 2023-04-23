import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import CompanyEmployees from "./CompanyEmployees"
import CompanyAdmins from "./CompanyAdmins"

const CompanyDetails = (props) => {

    const [activeTab, setActiveTab] = useState(0);

    console.log("The company employees are:", props.employees)

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };    

    return (

        <div>
            <Tabs value={activeTab} onChange={handleTabChange}>
                <Tab label="Company Employees" />
                <Tab label="Company Admins" />
                <Tab label="Inactive Employees" />
            </Tabs>
            {activeTab === 0 && (
                <CompanyEmployees employees={props.employees}/>
            )}
            {activeTab === 1 && (
                <CompanyAdmins 
                    admins={props.admins}
                />
            )}
            {/* {activeTab === 2 && (
                <TableBody>
                    {props.inactiveEmployees.map((employee, idx) => (
                        <TableRow key={employee.id}>
                            // Render inactiveEmployees data here
                        </TableRow>
                    ))}
                </TableBody>
            )} */}
        </div>

    )
}

export default CompanyDetails;
