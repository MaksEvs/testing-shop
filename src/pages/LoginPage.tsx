import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import Login from "../components/Login";

const LoginPage: React.FC = () => {
	return (
		<div className="login-page">
			<div>Вход</div>
			<Login />
			<p>
				Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
			</p>
		</div>
	);
};

export default LoginPage;
