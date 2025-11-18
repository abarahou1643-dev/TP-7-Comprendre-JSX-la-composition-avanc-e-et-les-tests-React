import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('affiche une erreur si le champ email est vide', () => {
    render(<ContactForm />);

    const submitButton = screen.getByText('Soumettre');
    fireEvent.click(submitButton);

    expect(screen.getByText('L\'email est requis')).toBeInTheDocument();
});

test('affiche une erreur pour email invalide', () => {
    render(<ContactForm />);

    const input = screen.getByPlaceholderText('Votre email');
    const submitButton = screen.getByText('Soumettre');

    fireEvent.change(input, { target: { value: 'email-invalide' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Email invalide')).toBeInTheDocument();
});