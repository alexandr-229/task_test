import { useContext, useEffect, useState } from "react";

import { IUser } from "../../types/user.interface";
import { User } from "../../components/user";
import { Context } from "../../context";
import { Input } from "../../components/input";
import styles from "./home.module.css";

export const HomeScreen = () => {
	const { loading, users, error } = useContext(Context);
	const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users);
	const [search, setSearch] = useState<string>("");

	useEffect(() => {
		const filteredUsers = users.filter((user) => {
			return user.name.toLowerCase().includes(search.toLowerCase());
		});
		setFilteredUsers(filteredUsers);
	}, [search, users]);

	useEffect(() => {
		setFilteredUsers(users);
	}, [loading, users]);

	if (error) {
		return (
			<div className={styles.error}>
				<p>Something went wrong</p>
			</div>
		);
	}

	if (loading) {
		return null;
	}

	return (
		<div className={styles.users}>
			<Input
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				placeholder="Find user..."
				className={styles.input}
			/>
			{filteredUsers.map((user: IUser) => (
				<User {...user} key={user.id} />
			))}
		</div>
	);
};
