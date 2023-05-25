import { NavLink } from 'react-router-dom';

const Button = (props) => {
	return (
		<li>
			<NavLink className={props.className} to={props.linkTo}>
				<button>{props.children}</button>
			</NavLink>
		</li>
	);
};

export default Button;
