import axios from "axios";

export const instance = axios.create({
	withCredentials: false,
	baseURL:
		"https://urbsoft-test-task-default-rtdb.europe-west1.firebasedatabase.app/"
});
