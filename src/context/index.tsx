import { ReactNode, createContext, useEffect, useReducer } from "react";

import { IContext } from "../types/context.interface";
import { IProvider } from "../types/provider.interface";
import { reducer } from "./reducer";
import { IUser } from "../types/user.interface";
import { createUser, getUsers, changeUser, deleteUser } from "../server";

const initialArgs: IContext = {
	error: false,
	loading: true,
	users: []
};

export const Context = createContext<IProvider>({
	...initialArgs,
	addUser: async () => {},
	changeOneUser: async () => {},
	deleteOneUser: async () => {},
	getOneUser: () => ({
		id: "",
		name: "",
		surname: "",
		email: "",
		phone: "",
		birthday: new Date()
	})
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialArgs);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const response = await getUsers();
			const users = Object.keys(response || {}).map((key) => {
				return { ...response[key], id: key };
			});
			dispatch({
				type: "LOAD_USERS",
				payload: users
			});
		} catch (e) {
			console.log(e);
			dispatch({ type: "SET_ERROR", payload: true });
		}
	};

	const getOneUser = (id: string) => {
		const user = state.users.find((user) => user.id === id);
		if (!user) {
			throw new Error("User not found");
		}
		return user;
	};

	const addUser = async (user: Omit<IUser, "id">) => {
		try {
			const response = await createUser(user);
			dispatch({ type: "ADD_USER", payload: { ...user, id: response.name } });
		} catch (e) {
			console.log(e);
			dispatch({ type: "SET_ERROR", payload: true });
		}
	};

	const changeOneUser = async (user: IUser) => {
		try {
			await changeUser(user);
			dispatch({ type: "CHANGE_USER", payload: user });
		} catch (e) {
			console.log(e);
			dispatch({ type: "SET_ERROR", payload: true });
		}
	};

	const deleteOneUser = async (id: string) => {
		try {
			await deleteUser(id);
			dispatch({ type: "DELETE_USER", payload: id });
		} catch (e) {
			console.log(e);
			dispatch({ type: "SET_ERROR", payload: true });
		}
	};

	return (
		<Context.Provider
			value={{ ...state, addUser, changeOneUser, getOneUser, deleteOneUser }}>
			{children}
		</Context.Provider>
	);
};
