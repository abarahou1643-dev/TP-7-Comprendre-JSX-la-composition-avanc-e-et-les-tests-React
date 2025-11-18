import React, { useState } from 'react';
import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import DataLoader from './DataLoader';
import Greeting from './Greeting';
import Counter from './Counter';
import ListFilter from './ListFilter';
import ContactForm from './ContactForm';
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <div className="App">
            <div className="app-container">
                <header className="app-header">
                    <h1 className="app-title">TP JSX et Composition</h1>
                    <p className="app-subtitle">
                        Exploration complète de JSX, des composants d'ordre supérieur,
                        des Render Props et des tests React avec des exemples pratiques
                    </p>
                </header>

                <div className="sections-grid">
                    {/* Étape 2-4 : JSX Demo */}
                    <div
                        className="section-card"
                        onMouseEnter={() => setActiveSection('jsx')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <div className="section-header">
                            <span className="step-badge">Étape 2-4</span>
                            <h2 className="section-title">🚀 JSX Demo</h2>
                        </div>
                        <JSXDemo />
                    </div>

                    {/* Étape 5 : HOC avec Logging */}
                    <div
                        className="section-card"
                        onMouseEnter={() => setActiveSection('hoc')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <div className="section-header">
                            <span className="step-badge">Étape 5</span>
                            <h2 className="section-title">🎛️ HOC avec Logging</h2>
                        </div>
                        <ButtonWithLogging label="Cliquer pour voir les logs" />
                        <div className="console-info">
                            Ouvrez la console du navigateur (F12) pour observer le logging des props
                        </div>
                    </div>

                    {/* Étape 6 : Render Props */}
                    <div
                        className="section-card"
                        onMouseEnter={() => setActiveSection('render-props')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <div className="section-header">
                            <span className="step-badge">Étape 6</span>
                            <h2 className="section-title">🔧 Render Props</h2>
                        </div>
                        <DataLoader
                            render={(data) => (
                                <ul className="data-list">
                                    {data.map((name) => (
                                        <li key={name} className="data-item">
                                            👤 {name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        />
                    </div>

                    {/* Étape 8 : Greeting */}
                    <div
                        className="section-card"
                        onMouseEnter={() => setActiveSection('greeting')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <div className="section-header">
                            <span className="step-badge">Étape 8</span>
                            <h2 className="section-title">👋 Greeting</h2>
                        </div>
                        <div className="greeting-container">
                            <Greeting name="Alice" />
                        </div>
                    </div>

                    {/* Étape 9 : Counter */}
                    <div
                        className="section-card"
                        onMouseEnter={() => setActiveSection('counter')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <div className="section-header">
                            <span className="step-badge">Étape 9</span>
                            <h2 className="section-title">🔢 Counter</h2>
                        </div>
                        <Counter />
                    </div>

                    {/* Étape 10 : ListFilter */}
                    <div
                        className="section-card"
                        onMouseEnter={() => setActiveSection('list-filter')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <div className="section-header">
                            <span className="step-badge">Étape 10</span>
                            <h2 className="section-title">🔍 ListFilter</h2>
                        </div>
                        <ListFilter
                            data={['Pomme', 'Banane', 'Orange', 'Raisin', 'Fraise', 'Kiwi', 'Mangue']}
                            render={(filteredData) => (
                                <div className="filtered-list">
                                    {filteredData.length > 0 ? (
                                        <ul className="data-list">
                                            {filteredData.map((item, index) => (
                                                <li key={index} className="data-item">
                                                    🍎 {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="no-results">
                                            🔍 Aucun résultat trouvé
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    {/* Étape 10 : ContactForm */}
                    <div
                        className="section-card"
                        onMouseEnter={() => setActiveSection('contact')}
                        onMouseLeave={() => setActiveSection(null)}
                    >
                        <div className="section-header">
                            <span className="step-badge">Étape 10</span>
                            <h2 className="section-title">📧 ContactForm</h2>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;