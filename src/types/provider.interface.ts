import { IContext } from "./context.interface";
import { IUser } from "./user.interface";

export interface IProvider extends IContext {
	addUser: (user: Omit<IUser, "id">) => Promise<void>;
	changeOneUser: (user: IUser) => Promise<void>;
	getOneUser: (id: string) => IUser;
	deleteOneUser: (id: string) => Promise<void>;
}
