import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";

function Login(){
    const {isAuthenticated} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const fromLocation = ((location.state)?.from?.pathname) || '/';

    useEffect(() => {
        if (isAuthenticated) {
            // User is authenticated, redirect or show logged-in state
            navigate(fromLocation, { replace: true });
        }
    }, [isAuthenticated, fromLocation, navigate]);

    const handleLogin = (provider: string) => {
        // Implement login logic here
        if (provider === "google") {
            window.location.href = 'http://localhost:8080/oauth2/authorization/google';
        }
        else return;
    };

    return (
        <>
            login with google
            
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleLogin("google")}>login with google</button>

        </>
    )
}
export default Login;