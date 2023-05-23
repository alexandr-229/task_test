import { IUser } from "../types/user.interface";
import { instance } from "./axios";

export const getUsers = async () => {
	const response = await instance.get("/users.json");
	return response.data;
};

export const createUser = async (user: Omit<IUser, "id">) => {
	const response = await instance.post("/users.json", user);
	return response.data;
};

export const changeUser = async (user: IUser) => {
	const response = await instance.patch(`/users/${user.id}.json`, user);
	return response;
};

export const deleteUser = async (id: string) => {
	const response = await instance.delete(`/users/${id}.json`);
	return response.data;
};
