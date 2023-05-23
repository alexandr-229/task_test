import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface UserProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string;
	surname: string;
	email: string;
	phone: string;
	birthday: Date;
	id: string;
}
