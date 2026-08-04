## Documentation
 
### 1. What change was made:
The change was to replace the manual data fetching with TanStack Query. Previously,
every page used `useEffect` combined with `useState` to fetch data from the backend,
and manually called `setState` after every POST request to update the displayed
list. This change refactors `useEmployeeForm` and `useRoleForm` to use `useQuery`
for fetching and `useMutation` for creating new entries.
 
### 2. Tools used:
TanStack Query installed in the frontend application.
- The `QueryClient` and `QueryClientProvider` were added to `main.tsx` to wrap the entire app.
- Inside hooks, `useQuery` replaces `useEffect` and `useState` fetch, and `useMutation` replaces
manual `fetch` and `setState` used after form submissions.
 
### 3. How this affects the user experience:
Users benefit from faster perceived performance because data is cached after the first
fetch. Navigating away from the Employees page and returning no longer triggers a fresh
network request if the data hasn't changed. After adding a new employee or role,
`queryClient.invalidateQueries` automatically triggers a refetch, so the updated list appears
immediately. Loading states are tracked automatically, making it straightforward to
show loading indicators to the user.
 
### 4. How this affects understanding of the app:
Integrating TanStack Query changes how the frontend uses data.
Rather than treating fetched data as a local component state that needs to be
manually synchronized with the server, TanStack Query uses server data as
a cache that is occasionally synchronized. The distinction between the server state and the UI state
is important as it clarifies that `useState` should only manage presentation logic, while server data
belongs in the query cache. The separation will make the code clean and maintainable.
