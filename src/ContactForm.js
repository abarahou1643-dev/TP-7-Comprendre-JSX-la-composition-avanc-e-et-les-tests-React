import React, { useState } from 'react';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError('L\'email est requis');
        } else if (!email.includes('@')) {
            setError('Email invalide');
        } else {
            setError('');
            console.log('Formulaire soumis avec:', email);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Soumettre</button>
        </form>
    );
}

export default ContactForm;