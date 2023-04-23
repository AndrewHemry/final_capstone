import React from "react";
// import { Link } from "react-router-dom";
import { TableRow, TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BranchEmployees = ( {employee, idx, activeTab} ) => {

    console.log("The branch employees are:", employee)

    const handleDelete = (idx) => {
        console.log("The remove function was clicked, the idx is:", idx)
        // removeBusiness(idx)
      };

    return (
        <TableRow className="branch-table-cells" key={employee.id}>
            <TableCell align="left">{employee.first_name}</TableCell>
            <TableCell align="left">{employee.last_name}</TableCell>
            <TableCell align="left">{employee.employee_email}</TableCell>
            <TableCell align="left">{employee.job_title}</TableCell>
            <TableCell align="left">
            {activeTab === 0 ? (
                <DeleteIcon
                // ACTION ITEM - idx is returning undefined
                    onClick={() => handleDelete(idx)}
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
