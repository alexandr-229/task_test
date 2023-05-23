import { useReducer, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Input } from "../../components/input";
import { createReducer } from "./reducer";
import { IUser } from "../../types/user.interface";
import { Context } from "../../context";
import { validateData } from "../../helpers";
import styles from "./edit.module.css";

const initialArgs: IUser = {
	name: "",
	surname: "",
	email: "",
	phone: "",
	birthday: new Date(),
	id: Math.random().toString()
};

export const EditScreen = () => {
	const [state, dispatch] = useReducer(createReducer, initialArgs);
	const { changeOneUser, getOneUser, loading } = useContext(Context);
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		if (!loading) {
			const user = getOneUser(params.id as string);
			dispatch({ type: "CHANGE", payload: user });
		}
	}, [loading, getOneUser, params.id]);

	const edit = async () => {
		const error = validateData(state);
		if (error) {
			alert(error);
			return;
		}
		await changeOneUser(state);
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
				value={state.phone}
				className={styles.input}
				type="number"
				onChange={(event) =>
					dispatch({ type: "CHANGE_PHONE", payload: event.target.value })
				}
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
			<button className={styles.button} onClick={edit}>
				Update User
			</button>
		</div>
	);
};
