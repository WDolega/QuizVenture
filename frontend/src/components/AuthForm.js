import {
	Form,
	Link,
	useSearchParams,
	useActionData,
	useNavigation,
} from 'react-router-dom';

import logo from '../assets/icons/logo_quiz_venture.png';
import classes from './AuthForm.module.css';

const AuthForm = () => {
	const data = useActionData();
	const navigation = useNavigation();

	const [searchParams] = useSearchParams();
	const isLogin = searchParams.get('mode') === 'login';
	const isSubmitting = navigation.state === 'submitting';

	return (
		<div className={classes.theme}>
			<img src={logo} alt='logo QuizVenture' />
			<Form method='post' className={classes.form}>
				<h2>Wyrusz w niezapomnianą przygodę z geografią</h2>
				<p>
					<input
						id='email'
						type='email'
						name='email'
						autoComplete='on'
						placeholder='E-mail'
						required
					/>
				</p>
				<p>
					<input
						id='password'
						type='password'
						name='password'
						autoComplete='on'
						placeholder='Hasło'
						required
					/>
				</p>
				<button disabled={isSubmitting}>
					{isLogin ? 'Zaloguj się' : 'Zarejestruj się'}
				</button>
				<div className={classes.actions}>
					{isLogin
						? 'lub zacznij przygodę już dziś i'
						: 'lub jeśli masz już konto'}

					<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
						{isLogin ? 'zarejestruj się' : 'zaloguj się'}
					</Link>
				</div>
			</Form>
		</div>
	);
};

export default AuthForm;
