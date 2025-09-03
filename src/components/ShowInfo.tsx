import React, { use, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

function ShowInfo() {
    const {user, loading, isAuthenticated} = useAuth();

    useEffect(() => {
        if (!loading && isAuthenticated) {
            // User is authenticated and not loading
            getInfo();
        }
    }, [loading, isAuthenticated]);
    const getInfo = () => {
        fetch("http://localhost:8080/api/info", {credentials: "include"})
            .then(response => {
                console.log(response);
                response.json();
            }
            )
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching info:", error);
            });
    }
    if(user?.role === 'USER'){
        return(
            <div className="user-info">
                user page
            </div>
        )
    }

    return (
        <div className="show-info">
            <strong>Secured admin page</strong>
        </div>
    );
}
export default ShowInfo;