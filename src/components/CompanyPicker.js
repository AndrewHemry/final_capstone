import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateCurrentCompany } from "../redux/actions";
// import { Link } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { Table, TableContainer, TableBody, TableRow, TableCell, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";


// const CompanyPicker = (props) => {
    
//     const dispatch = useDispatch();

//     // This is currently updating my State
//     const handleCurrentCompany = (company) => {
//         const currentCompany = { company_id: company.company_id, company_name: company.company_name };
//         dispatch(updateCurrentCompany(currentCompany));
//         localStorage.setItem('currentCompany', JSON.stringify(currentCompany))
//     };    

//     return (
//         <div className="company-picker">
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                     <TableBody>
//                         {props.available_companies.map((company, idx) => (
//                             <TableRow
//                             key={company.company_id}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                             >
//                                 <TableCell component="th" scope="row">
//                                     Idea behind this is to update the global state after a company is selected
//                                     <Link 
//                                     className="company-link" 
//                                     to={`/company/${company.company_id}`}
//                                     onClick={() => handleCurrentCompany(company)}
//                                     >
//                                         {company.company_name}
//                                     </Link>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     )
// }

const CompanyPicker2 = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // This is currently updating my State
    const handleCurrentCompany = (company) => {
        const currentCompany = { company_id: company.company_id, company_name: company.company_name };
        // Dispatch should no longer be needed
        dispatch(updateCurrentCompany(currentCompany));
        localStorage.setItem('currentCompany', JSON.stringify(currentCompany))
        navigate(`/company/${currentCompany.company_id}`)
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Company Selector</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    label="Current Company"
                >
                    {props.available_companies.map((company, idx) => (
                        <MenuItem
                            key={company.company_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className="company-link" 
                            onClick={() => handleCurrentCompany(company)}
                            >                                    
                                {company.company_name}
                        </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default CompanyPicker2;
// export default CompanyPicker;