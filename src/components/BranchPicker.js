import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";



const BranchPicker = (props) => {

    const navigate = useNavigate();
    const currentCompany = JSON.parse(localStorage.getItem('currentCompany'));

    const [selectedBranch, setSelectedBranch] = useState('');

    // This is updating the state when the page is refreshed based on the localStorage data
    useEffect(() => {
        const storedSelectedBranch = window.localStorage.getItem('currentBranch');
        if (storedSelectedBranch) {
          const { branch_name } = JSON.parse(storedSelectedBranch);
          setSelectedBranch(branch_name);
        }
    }, []);

    // This is setting the localStorage for the branch data to prevent losing it on refresh
    const handleCurrentBranch = (branch) => {
        const currentBranch = { branch_id: branch.branch_id, branch_name: branch.branch_name };
        localStorage.setItem('currentBranch', JSON.stringify(currentBranch));
        navigate(`/company/${currentCompany.company_id}/branch/${branch.branch_id}`);
    }

    // This is currently updating the local state when it's first selected
    const handleBranchChange = (e) => {
        setSelectedBranch(e.target.value);
    }

    return (
        <div className="nav-branch-picker">
            <FormControl fullWidth>
                <InputLabel id="branch-picker">Select a Branch</InputLabel>
                <Select
                    id="branch-picker"
                    labelId="current-branch"
                    label="Current Branch"
                    value={selectedBranch}
                    onChange={handleBranchChange}
                >
                    {props.branches.map((branch) => (
                        <MenuItem
                            key={branch.branch_id}
                            value={branch.branch_name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className="branch-link" 
                            onClick={() => handleCurrentBranch(branch)}
                            >                                    
                                {branch.branch_name}
                        </MenuItem>
                        ))

                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default BranchPicker;