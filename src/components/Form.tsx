import React, { useState } from "react";
import { IFormProps } from "../types/interface";

const Form: React.FC<IFormProps> = ({ title, handleClick }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Пароль"
			/>

			<button onClick={() => handleClick(email, password)}>{title}</button>
		</div>
	);
};

export default Form;
