import React from "react";
import { TableRow, TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CompanyAdmins = ({ admin, activeTab, removeAdmin }) => {

    // const handleDelete = (idx) => {
    //     props.removeAdmin(idx)
    //   };

    return (

        // I don't need Redux at all but it is good practice - I should call on my API router here to generate the Branch Directory using fetch or axios THEN update the local state on this page
                <TableRow className="branch-table-cells" key={admin.id}>
                <TableCell align="left">{admin.first_name}</TableCell>
                <TableCell align="left">{admin.last_name}</TableCell>
                <TableCell align="left">{admin.email_address}</TableCell>
                <TableCell align="left">
                {activeTab === 1 ? (
                    <DeleteIcon
                        onClick={() => removeAdmin(admin)}
                        className="icon text-red"                    
                    />            
                ) : ( 
                    null 
                )}                
                </TableCell>            
                </TableRow>

    )
}

export default CompanyAdmins;