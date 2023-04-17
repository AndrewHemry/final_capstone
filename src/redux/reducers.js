import { combineReducers } from "redux";

const user = (state = null) => state

// Action Item - State needs to be updated to allow for the case switches of add/removing
const branches = (state = [], action) => state

// Action Item - State needs to be updated to allow for the case switches of add/removing
const employees = (state = [], action) => state

// Action Item - Do I need a switch statement here? Maybe not
const available_companies = (state = [], action) => state

const current_company = (state = null, action) => {
    switch(action.type) {
        case "UPDATE_CURRENT_COMPANY":
            return action.value
        default:
            return state
    }
}

export default combineReducers({ user, available_companies, branches, current_company })
// export default combineReducers({ user, branches, employees, available_companies });