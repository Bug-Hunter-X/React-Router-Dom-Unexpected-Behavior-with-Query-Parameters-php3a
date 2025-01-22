# React Router Dom Unexpected Query Parameter Behavior

This repository demonstrates an uncommon bug in React Router Dom v6 related to how it handles navigation with query parameters.  When the query parameters of a URL change, the component at that route does not re-render unless a full page reload occurs. This can cause issues where data fetched based on query parameters isn't updated.

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/`.
5. Add a query parameter in the address bar (e.g., `/search?q=test`).
6. Observe that the Home component does not re-render. A page reload is needed to see the change reflected.

## Solution
The solution involves using the `useSearchParams` hook which provides an efficient method to manage query parameters and ensure components rerender upon changes in the query string.
