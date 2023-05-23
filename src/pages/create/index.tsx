import { useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/input";
import { createReducer } from "./reducer";
import { IUser } from "../../types/user.interface";
import { Context } from "../../context";
import { validateData } from "../../helpers";
import styles from "./create.module.css";

const initialArgs: Omit<IUser, "id"> = {
	name: "",
	surname: "",
	email: "",
	phone: "",
	birthday: new Date()
};

export const CreateScreen = () => {
	const [state, dispatch] = useReducer(createReducer, initialArgs);
	const { addUser } = useContext(Context);
	const navigate = useNavigate();

	const create = async () => {
		const error = validateData(state);
		if (error) {
			alert(error);
			return;
		}
		await addUser(state);
		navigate("/");
	};

	return (
		<div className={styles.wrapper}>
			<Input
				placeholder="Name"
				className={styles.input}
				value={state.name}
				onChange={(event) =>
					dispatch({ type: "CHANGE_NAME", payload: event.target.value })
				}
			/>
			<Input
				placeholder="Surname"
				value={state.surname}
				className={styles.input}
				onChange={(event) =>
					dispatch({ type: "CHANGE_SURNAME", payload: event.target.value })
				}
			/>
			<Input
				placeholder="Email"
				type="email"
				value={state.email}
				className={styles.input}
				onChange={(event) =>
					dispatch({ type: "CHANGE_EMAIL", payload: event.target.value })
				}
			/>
			<Input
				placeholder="Phone"
				value={state.phone.toString()}
				className={styles.input}
				type="tel"
				onChange={(event) => {
					dispatch({ type: "CHANGE_PHONE", payload: event.target.value });
				}}
			/>
			<Input
				placeholder="Birthday"
				type="date"
				className={styles.input}
				value={state.birthday.toISOString().split("T")[0]}
				onChange={(event) =>
					dispatch({
						type: "CHANGE_BIRTHDAY",
						payload: new Date(event.target.value)
					})
				}
			/>
			<button className={styles.button} onClick={create}>
				Create User
			</button>
		</div>
	);
};
