import classNames from "classnames";

import styles from "./input.module.css";
import { InputProps } from "./input.props";

export const Input = ({ className, ...props }: InputProps) => {
	return <input className={classNames(styles.input, className)} {...props} />;
};
