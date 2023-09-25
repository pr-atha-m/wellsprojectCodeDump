import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Simulate user authentication (you should implement your own logic)
const isAuthenticated = true;

function HomePage() {
  return <h1>Home Page</h1>;
}

function LoginPage() {
  return <h1>Login Page</h1>;
}

function TransactionsPage() {
  return <h1>Transactions Page</h1>;
}

function App() {
  const routeConfig = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/transactions',
      element: isAuthenticated ? <TransactionsPage /> : <Navigate to="/login" />,
    },
  ];

  return (
    <Router>
      <Routes>
        {routeConfig.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
