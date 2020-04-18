import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test ('contact form is rendering', () => {
	render(<ContactForm />);
});

test ('form inputs work ', () => {
	const { getByLabelText, getByTestId } = render(<ContactForm />);
	const firstName = getByLabelText(/First Name/i);
	const lastName = getByLabelText(/Last name/i);
	const email = getByLabelText(/Email/i);
	const message = getByLabelText(/Message/i);
	const submit = getByTestId(/submit/i);

	fireEvent.change(firstName, {target:{value: 'John'}});
	fireEvent.change(lastName, {target:{value: 'Doe'}});
	fireEvent.change(email, {target:{value: 'john.doe@testing.com'}});
	fireEvent.change(message, {target:{value: 'This is a test message.' }});
	fireEvent.click(submit);

	expect(firstName.value).toBe('John');
	expect(lastName.value).toBe('Doe');
	expect(email.value).toBe('john.doe@testing.com');
	expect(message.value).toBe('This is a test message.');

})