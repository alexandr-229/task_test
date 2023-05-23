import { useContext } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./user.module.css";
import { Context } from "../../context";
import { UserProps } from "./user.props";
import { formatDate, formatPhoneNumber } from "../../helpers";

export const User = ({
	className,
	name,
	surname,
	email,
	phone,
	birthday,
	id,
	...props
}: UserProps) => {
	const { deleteOneUser } = useContext(Context);

	return (
		<div className={classNames(styles.user, className)} {...props}>
			<p className={styles.name}>{name}</p>
			<p className={styles.surname}>{surname}</p>
			<p className={styles.email}>{email}</p>
			<p className={styles.phone}>{formatPhoneNumber(phone)}</p>
			<p className={styles.birthday}>{formatDate(birthday)}</p>
			<Link to={`/edit/${id}`} className={styles["edit-link"]}>
				<button className={classNames(styles.edit, styles.button)}>Edit</button>
			</Link>
			<button
				className={classNames(styles.delete, styles.button)}
				onClick={() => deleteOneUser(id)}>
				Delete
			</button>
		</div>
	);
};
