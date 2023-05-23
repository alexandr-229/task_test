import { IUser } from "../types/user.interface";

export const formatDate = (time: Date) => {
	const date = new Date(time);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}.${month}.${day}`;
};

export const formatPhoneNumber = (phone: string) => {
	const countryCode = "38";
	const areaCode = phone.slice(0, 3);
	const firstPart = phone.slice(3, 6);
	const secondPart = phone.slice(6, 8);
	const thirdPart = phone.slice(8, 10);

	return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;
};

export const validateData = (state: Omit<IUser, "id">) => {
	if (!state.name) {
		return "Invalid name";
	}
	if (!state.surname) {
		return "Invalid surname";
	}
	if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
		return "Invalid email";
	}
	if (
		!state.phone ||
		!/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
			state.phone
		)
	) {
		return "Invalid phone";
	}
	if (!state.birthday) {
		return "Invalid birthday";
	}
	return false;
};
