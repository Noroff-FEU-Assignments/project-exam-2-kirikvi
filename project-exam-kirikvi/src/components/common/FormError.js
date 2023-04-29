import PropTypes from "prop-types";
import styles from "./FormError.module.css";
export default function FormError({ children }) {
	return <div className={styles.formError}>{children}</div>;
}

FormError.propTypes = {
	children: PropTypes.node.isRequired,
};