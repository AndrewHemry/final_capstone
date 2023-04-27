import { combineReducers } from "redux";

const user = (state = null) => state

// Action Item - State needs to be updated to allow for the case switches of add/removing
const branches = (state = [], action) => {
    switch(action.type) {
        case "ADD_BRANCH":
            return [...state, action.value]
        case "REMOVE_BRANCH":
            const newState = [...state]
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}

const employees = (state = [], action) => {
    switch(action.type) {
        case "ADD_EMPLOYEE":
            return [...state, action.value]
        case "REMOVE_EMPLOYEE":
            const newState = [...state]
            let index = newState.findIndex(i => i.id === action.value.id);
            newState.splice(index, 1)
            return newState

        case "TOGGLE_ACTIVE_STATUS_EMPLOYEE":
            const toggledEmployeeState = [...state]
            let toggledEmployeeIndex = toggledEmployeeState.findIndex(i => i.id === action.value.id)
            toggledEmployeeState[toggledEmployeeIndex] = action.value = {
                id: action.value.id,
                first_name: action.value.first_name,
                last_name: action.value.last_name,
                employee_email: action.value.employee_email,
                job_title: action.value.job_title,
                is_active: !action.value.is_active
            }
            console.log("The updated state is", toggledEmployeeState)
            return toggledEmployeeState

        default:
            return state
    }
}

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

const admins = (state = [], action) => {
    switch(action.type) {
        case "ADD_ADMIN":
            return [...state, action.value]
        case "REMOVE_ADMIN":
            const newState = [...state]
            let index = newState.findIndex(i => i.id === action.value.id);
            newState.splice(index, 1)
            return newState

            // const newState = [...state]
            // newState.splice(action.value, 1)
            // return newState
        default:
            return state
    }
}


export default combineReducers({ user, available_companies, branches, current_company, employees, admins })