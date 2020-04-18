import React from 'react';

import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test ('contact form is rendering', () => {
	render(<ContactForm />);
});