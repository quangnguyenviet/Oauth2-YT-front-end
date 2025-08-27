import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function Home(){
    const {isAuthenticated, loading} = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    const handleLogout = () => {
        window.location.href = "http://localhost:8080/logout";
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Home;