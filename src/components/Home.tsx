import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function Home(){
    const {isAuthenticated, loading, user, setUser} = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated || !user) {
        return <Navigate to="/login" />;
    }
    const handleLogout = () => {
        setUser(null);
        window.location.href = "http://localhost:8080/logout";
    }

    return (
        <div>
            <h1>Home Page</h1>
            {/* user info */}
            {user && (
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                    {user.picture && <img src={user.picture} alt={user.name} />}
                </div>
            )}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Home;