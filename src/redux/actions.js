// export const UPDATE_SELECTED_COMPANY = "UPDATE_SELECTED_COMPANY";

// export function updateSelectedCompany(id, name) {
//   return {
//     type: UPDATE_SELECTED_COMPANY,
//     payload: { id, name },
//   };
// }

export const updateCurrentCompany = (currentCompany) => {
  return {
    type: "UPDATE_CURRENT_COMPANY",
    value: currentCompany
  }
}