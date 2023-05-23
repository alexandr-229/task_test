import { Link } from "react-router-dom";

import styles from "./header.module.css";

export const Header = () => {
	return (
		<div className={styles.header}>
			<Link to="/">
				<img
					src="https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1475442089071955968"
					alt="logo"
				/>
			</Link>
			<Link to="/create" className={styles.link}>
				<button className={styles.button}>Create User</button>
			</Link>
		</div>
	);
};
