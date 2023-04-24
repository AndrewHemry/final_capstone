import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateCurrentCompany } from "../redux/actions";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";


const CompanyPicker2 = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [localCompanies, setLocalCompanies] = useState([]);

    useEffect(() => {
        axios
          .get(process.env.REACT_APP_listCompanies)
          .then((response) => {
            setLocalCompanies(response.data)
            console.log(response.data)
        })
          .catch((error) => console.error(error));
      }, []);

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

                    {localCompanies.map((company, idx) => (
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