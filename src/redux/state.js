export default {
    user: {
        username: "test",
        email: "test@gmail.com"
    },

    current_company: {
        
    },

    // After a user selects a specific company, we need to return the API based on the selected_company ID and return THOSE branches
    // Edge case - Does state clear if a user picks a different company? Might have to manually clear if a user picks a different company
    branches: [
        {
            "company_id": 1,
            "branch_id": 1,
            "branch_name": "Branch 1"
        },
        {
            "company_id": 1,
            "branch_id": 2,
            "branch_name": "Branch 2"
        }
    ],

    employees: [
        // Action Item - Need to update all the available fields
        {
            "id": 55,
            "first_name": "Logan",
            "last_name": "Hemry",
            "employee_email": "Logan@gmail.com"
        },
        {
            "id": 56,
            "first_name": "Tay",
            "last_name": "Day",
            "employee_email": "Tay@gmail.com"
        }
    ],

    available_companies: [
        {
            "company_id": 1,
            "company_name": "Company 1"
        },
        {
            "company_id": 2,
            "company_name": "Company 2"
        }
    ]
}