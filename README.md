Frontend Task: Next.js Authentication Flow
This project is a solution to a frontend assessment task, demonstrating a complete user authentication flow using Next.js and Tailwind CSS.

Live Demo
[https://auth-flow-three-beta.vercel.app/]

Task Overview

Authentication Flow:

A Register page to create a new user account.

An Account Verification page to confirm the user's email with a specific code.

A Login page for returning users.

API Integration with the provided Postman collection for all auth endpoints.

Client-side route protection, storing the authentication token in localStorage and redirecting users based on their auth status.

A simple, protected Dashboard page that greets the logged-in user.

When the user logout, the token is deleted from localStorage


Deployment: Vercel

Features Implemented
Full Authentication Cycle: Register -> Verify -> Login -> Dashboard -> Logout.

Client-Side Protected Routes: Unauthenticated users are redirected from protected pages (like /dashboard or the homepage) to the login page.

Auth Route Protection: Authenticated users are redirected away from pages like /login and /register.

API Error Handling: User-friendly error messages are displayed on forms when API calls fail.


NOTES:

1-All the api call functions are inside services folder in api.ts file

2-The dashboard is a simple page that displays a welcome message with the name of the logged in user, it also contains a navbar that contains a logout button for testing purposes