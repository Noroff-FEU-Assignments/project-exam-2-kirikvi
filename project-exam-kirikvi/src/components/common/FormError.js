import PropTypes from "prop-types";

export default function FormError({ children }) {
	return <div>{children}</div>;
}

FormError.propTypes = {
	children: PropTypes.node.isRequired,
};