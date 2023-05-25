const express = require('express');
const { add, get } = require('../data/user');
const { createJSONToken, isValidPassword } = require('../util/auth');
const { isValidEmail, isValidText } = require('../util/validation');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
	const data = req.body;
	let errors = {};

	if (!isValidEmail(data.email)) {
		errors.email = 'Nieprawidłowy adres e-mail';
	} else {
		try {
			const existingUser = await get(data.email);
			if (existingUser) {
				errors.email = 'Utworzono już konto z takim adresem e-mail.';
			}
		} catch (error) {}
	}

	if (!isValidText(data.password, 6)) {
		errors.password = 'Hasło musi mieć przynajmniej 6 znaków.';
	}

	if (Object.keys(errors).length > 0) {
		return res.status(422).json({
			message: 'Niepawidłowe dane logowania.',
			errors,
		});
	}

	try {
		const createdUser = await add(data);
		const authToken = createJSONToken(createdUser.email);
		res
			.status(201)
			.json({ message: 'User created.', user: createdUser, token: authToken });
	} catch (error) {
		next(error);
	}
});

router.post('/login', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	let user;
	try {
		user = await get(email);
	} catch (error) {
		return res.status(401).json({ message: 'Błąd autentykacji.' });
	}

	const pwIsValid = await isValidPassword(password, user.password);
	if (!pwIsValid) {
		return res.status(422).json({
			message: 'Niepawidłowe dane logowania.',
			errors: { credentials: 'Niepawidłowe dane logowania.' },
		});
	}

	const token = createJSONToken(email);
	res.json({ token });
});

module.exports = router;
