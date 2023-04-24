import React from "react";
import { TableRow, TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BranchEmployees = ( { employee, activeTab, removeEmployee } ) => {

    return (
        <TableRow className="branch-table-cells" key={employee.id}>
            <TableCell align="left">{employee.first_name}</TableCell>
            <TableCell align="left">{employee.last_name}</TableCell>
            <TableCell align="left">{employee.employee_email}</TableCell>
            <TableCell align="left">{employee.job_title}</TableCell>
            <TableCell align="left">
            {activeTab === 0 ? (
                <DeleteIcon
                    onClick={() => removeEmployee(employee.id)}
                    className="icon text-red"
                />            
            ) : ( 
                null 
            )}
            </TableCell>
        </TableRow>
    )
}

export default BranchEmployees;
