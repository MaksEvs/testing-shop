import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

const HomePage: React.FC = () => {
	const dispatch = useDispatch();
	const { isAuth, email } = useAuth();
	return isAuth ? (
		<div>
			<h1>Добро пожаловать</h1>
			<span>{email}</span>

			<button onClick={() => dispatch(removeUser())}>Выход</button>
		</div>
	) : (
		<Navigate to="/login"></Navigate>
	);
};

export default HomePage;
