import { IUser } from "../../types/user.interface";

export type CreateAction =
	| { type: "CHANGE_NAME"; payload: string }
	| { type: "CHANGE_SURNAME"; payload: string }
	| { type: "CHANGE_EMAIL"; payload: string }
	| { type: "CHANGE_PHONE"; payload: string }
	| { type: "CHANGE_BIRTHDAY"; payload: Date };

export const createReducer = (
	state: Omit<IUser, "id">,
	action: CreateAction
): Omit<IUser, "id"> => {
	switch (action.type) {
		case "CHANGE_NAME": {
			return {
				...state,
				name: action.payload
			};
		}
		case "CHANGE_SURNAME": {
			return {
				...state,
				surname: action.payload
			};
		}
		case "CHANGE_EMAIL": {
			return {
				...state,
				email: action.payload
			};
		}
		case "CHANGE_PHONE": {
			return {
				...state,
				phone: action.payload
			};
		}
		case "CHANGE_BIRTHDAY": {
			return {
				...state,
				birthday: action.payload
			};
		}
		default: {
			throw new Error("Invalid type");
		}
	}
};
