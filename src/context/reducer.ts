import { IContext } from "../types/context.interface";
import { IUser } from "../types/user.interface";

type Action =
	| { type: "LOAD_USERS"; payload: IUser[] }
	| { type: "SET_LOADER"; payload: boolean }
	| { type: "ADD_USER"; payload: IUser }
	| { type: "CHANGE_USER"; payload: IUser }
	| { type: "DELETE_USER"; payload: string }
	| { type: "SET_ERROR"; payload: boolean };

export const reducer = (state: IContext, action: Action): IContext => {
	switch (action.type) {
		case "LOAD_USERS": {
			return {
				loading: false,
				error: false,
				users: action.payload
			};
		}
		case "SET_LOADER": {
			return {
				...state,
				loading: action.payload
			};
		}
		case "ADD_USER": {
			return {
				...state,
				users: [...state.users, action.payload]
			};
		}
		case "CHANGE_USER": {
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.payload.id) {
						return action.payload;
					}
					return user;
				})
			};
		}
		case "DELETE_USER": {
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload)
			};
		}
		case "SET_ERROR": {
			return {
				...state,
				error: action.payload
			};
		}
		default: {
			throw new Error("Invalid type");
		}
	}
};
