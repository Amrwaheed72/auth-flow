Frontend Task: Next.js Authentication Flow & UI Implementation
This project is a solution to a frontend assessment task, demonstrating a complete user authentication flow and a pixel-perfect UI implementation using Next.js and Tailwind CSS.

Live Demo
[https://auth-flow-three-beta.vercel.app/]

Task Overview
The core requirements for this project were divided into two main parts:

Authentication Flow:

A Register page to create a new user account.

An Account Verification page to confirm the user's email with a specific code.

A Login page for returning users.

API Integration with the provided Postman collection for all auth endpoints.

Client-side route protection, storing the authentication token in localStorage and redirecting users based on their auth status.

A simple, protected Dashboard page that greets the logged-in user.

When the user logout, the token is deleted from localStorage

User Interface (UI):

Tech Stack
Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS

UI Icons: Lucide React

API Communication: No API

Linting/Formatting: ESLint & Prettier

Deployment: Vercel

Features Implemented
Full Authentication Cycle: Register -> Verify -> Login -> Dashboard -> Logout.

Client-Side Protected Routes: Unauthenticated users are redirected from protected pages (like /dashboard or the homepage) to the login page.

Auth Route Protection: Authenticated users are redirected away from pages like /login and /register.

Responsive Layouts: All pages, including the complex UI showcase page, are fully responsive across mobile, tablet, and desktop breakpoints.

API Error Handling: User-friendly error messages are displayed on forms when API calls fail.

Loading States: UI elements provide feedback to the user during API requests.

NOTES:
1-All the api call functions are inside services folder in api.ts file
2-There are 3 layouts, the first for auth (to hide the navbar for login, register and verify pages), the second for the app layout (to show the navbar in the home page) and the third is the root layout
3-For better UX, i divided the Navbar into 3, one for desktop and this contains all the nav links, the other two for smaller screen one appear in the bottom of the screen to show the personal links, the other is triggered with the burger icon for the nav links
