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

// ACTION ITEM - State needs to be updated to allow for the case switches of add/removing/inactivating
const employees = (state = [], action) => {
    switch(action.type) {
        case "ADD_EMPLOYEE":
            return [...state, action.value]
        case "REMOVE_EMPLOYEE":
            const newState = [...state]
            newState.splice(action.value, 1)
            return newState
        // case "INACTIVATE_EMPLOYEE":
        //     console.log("Something here for inactivating employees")
        //     return newState
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
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}


export default combineReducers({ user, available_companies, branches, current_company, employees, admins })