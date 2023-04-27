import React from "react";
import { TableRow, TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CompanyEmployees = ( {employee, toggleActiveStatusEmployee} ) => {

    return (

        // I don't need Redux at all but it is good practice - I should call on my API router here to generate the Branch Directory using fetch or axios THEN update the local state on this page
            <TableRow className="branch-table-cells" key={employee.id}>
                <TableCell align="left">{employee.first_name}</TableCell>
                <TableCell align="left">{employee.last_name}</TableCell>
                <TableCell align="left">{employee.employee_email}</TableCell>
                <TableCell align="left">{employee.job_title}</TableCell>
                <TableCell align="left">
                    <DeleteIcon
                        onClick={() => toggleActiveStatusEmployee(employee)}
                        className="icon text-red"
                    />
                </TableCell>
            </TableRow>
        )
}

export default CompanyEmployees;