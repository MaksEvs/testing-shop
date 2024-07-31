import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage: React.FC = () => {
	return (
		<>
			<div>Регистрация</div>
			<SignUp />
			<p>
				Есть аккаунт? <Link to="/login">Войти</Link>
			</p>
		</>
	);
};

export default RegisterPage;
