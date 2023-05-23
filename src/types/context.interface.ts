import { IUser } from "./user.interface";

export interface IContext {
	loading: boolean;
	error: boolean;
	users: IUser[];
}
