export const updateCurrentCompany = (currentCompany) => {
  return {
    type: "UPDATE_CURRENT_COMPANY",
    value: currentCompany
  }
}

// ACTION ITEM - How can I remove an employee from a branch but not the company?
// ACTION ITEM - We are only going to inactive the employee from the company, not remove, so this should only display when inside a branch

// FOR THE EMPLOYEES
export const addEmployee = (newEmployee) => {
  return {
    type: "ADD_EMPLOYEE",
    value: newEmployee
  }
}

export const removeEmployee = (index) => {
  return {
    type: "REMOVE_EMPLOYEE",
    value: index
  }
}

// FOR THE BRANCHES
export const addBranch = (newBranch) => {
  return {
    type: "ADD_BRANCH",
    value: newBranch
  }
}

export const removeBranch = (index) => {
  return {
    type: "REMOVE_BRANCH",
    value: index
  }
}

// FOR THE ADMINS
export const addAdmin = (newAdmin) => {
  return {
    type: "ADD_ADMIN",
    value: newAdmin
  }
}

export const removeAdmin = (index) => {
  return {
    type: "REMOVE_ADMIN",
    value: index
  }
}