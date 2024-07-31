import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";

const SignUp: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleRegister = (email: string, password: string) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
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
				alert("Невалидные данные");
			});
	};
	return <Form title="sign in" handleClick={handleRegister} />;
};

export default SignUp;
