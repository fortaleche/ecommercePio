import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    };
    return (
        <nav>
            Hola Mundo
        </nav>
    )
    }

export default Navbar;