import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleLogin = (email: string, password: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				const token = await user.getIdToken();

				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: token,
					})
				);
				navigate("/");
			})
			.catch(() => {
				alert("Такого пользователя нет");
			});
	};

	return <Form title="sign in" handleClick={handleLogin}></Form>;
};

export default Login;
