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
            "id": 1,
            "first_name": "1",
            "last_name": "1",
            "employee_email": "1@gmail.com",
            "job_title": "Job Title B",
            "is_active": false
        },
        {
            "id": 2,
            "first_name": "2",
            "last_name": "2",
            "employee_email": "1@gmail.com",
            "job_title": "Job Title A",
            "is_active": true
        },
        {
            "id": 3,
            "first_name": "3",
            "last_name": "3",
            "employee_email": "3@gmail.com",
            "job_title": "Job Title A",
            "is_active": true
        },
        {
            "id": 4,
            "first_name": "4",
            "last_name": "4",
            "employee_email": "4@gmail.com",
            "job_title": "Job Title A",
            "is_active": true
        },
        {
            "id": 5,
            "first_name": "5",
            "last_name": "5",
            "employee_email": "5@gmail.com",
            "job_title": "Job Title A",
            "is_active": true
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
    ],

    admins: [
        {
            "id": 1,
            "first_name": "Peyton",
            "last_name": "Moss",
            "email_address": "Peyton@gmail.com"
        },
        {
            "id": 2,
            "first_name": "Alaysha",
            "last_name": "Night",
            "email_address": "Alaysha@gmail.com"
        }
    ]
}