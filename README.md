# react-js-task

git clone https://github.com/arianndrecaj/react-js-test.git

cd react-js-test

npm install

npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event

Also, add this to your package.json:
"scripts": {
"test": "jest"
}

npm start

Relating to the task please add answers to the following questions;
-How might you make this app more secure?

1)Input Validation and Sanitization: Ensure that all user inputs (from forms, search bars, etc.) are validated and sanitized to prevent XSS (Cross-Site Scripting) and SQL injection attacks. Use libraries like DOMPurify for sanitizing user input before rendering it to the DOM.

2)Authentication and Authorization : JWT Authentication: Use JWT (JSON Web Tokens) for secure authentication. Always validate JWT tokens server-side before granting access to protected routes.
OAuth: Implement third-party authentication (e.g., Google, Facebook, GitHub) for added security and convenience.

-How would you make this solution scale to millions of records?

1)Debouncing Search Input: When implementing search functionality, debounce the search input to avoid making an API request every time a character is typed. Instead, send a request after a slight delay, reducing the number of requests.

2)State Management Optimization: Use state management solutions like Redux or React Context efficiently to avoid unnecessary re-renders. Use selectors and memoization techniques to only update the components that need to re-render.
