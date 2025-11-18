

# TP React - JSX, Composition Avancée et Tests

##  Description du Projet

Ce projet est une application React complète démontrant les concepts fondamentaux du développement front-end moderne :
- **JSX** et sa transformation en JavaScript
- **Composition avancée** avec HOC (Higher-Order Components) et Render Props
- **Tests unitaires et d'intégration** avec Jest et React Testing Library
 ## Lien Drive :

https://drive.google.com/file/d/1XYN_oaRX5WC9XbpTKaMD2wTzjkw5Wkvx/view?usp=sharing
 
##  Objectifs Pédagogiques

-  Comprendre le fonctionnement interne de JSX
-  Maîtriser les Higher-Order Components (HOC)
-  Implémenter le pattern Render Props
-  Écrire des tests robustes pour les composants React
-  Créer des composants réutilisables et maintenables

##  Technologies Utilisées

- **React 18** - Bibliothèque front-end
- **JavaScript ES6+** - Langage de programmation
- **Jest** - Framework de tests
- **React Testing Library** - Utilitaire de tests React
- **CSS3** - Styles modernes avec variables CSS et Grid
- **Create React App** - Outil de configuration zero-config

## Structure du Projet

```
tp-jsx-tests/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── JSXDemo.js          # Démonstration JSX vs JavaScript pur
│   │   ├── Button.js           # Composant bouton de base
│   │   ├── ButtonWithLogging.js # HOC avec logging
│   │   ├── DataLoader.js       # Render Props pattern
│   │   ├── Greeting.js         # Composant testable
│   │   ├── Counter.js          # Composant avec état
│   │   ├── ListFilter.js       # Filtrage avec Render Props
│   │   └── ContactForm.js      # Formulaire avec validation
│   ├── hoc/
│   │   ├── withLogging.js      # Higher-Order Component
│   │   └── withTimestamp.js    # HOC avec timestamp
│   ├── tests/
│   │   ├── Greeting.test.js    # Tests unitaires
│   │   ├── Counter.test.js     # Tests d'intégration
│   │   └── ContactForm.test.js # Tests de validation
│   ├── App.js                  # Composant principal
│   ├── App.css                 # Styles modernes
│   └── index.js                Point d'entrée
├── package.json
└── README.md
```

##  Composants Implémentés

### 1. **JSXDemo** (Étapes 2-4)
- Démontre la transformation JSX → JavaScript
- Bonnes pratiques JSX (`className`, `htmlFor`)

### 2. **HOC withLogging** (Étape 5)
- Ajoute du logging des props à tout composant
- Démonstration des Higher-Order Components

### 3. **DataLoader** (Étape 6)
- Pattern Render Props pour le chargement de données
- Composant flexible et réutilisable

### 4. **Greeting** (Étape 8)
- Composant simple pour tests unitaires
- Affichage conditionnel

### 5. **Counter** (Étape 9)
- Gestion d'état avec hooks
- Tests d'intégration avec interactions

### 6. **ListFilter** (Étape 10)
- Filtrage en temps réel avec Render Props
- Interface utilisateur interactive

### 7. **ContactForm** (Étape 10)
- Validation de formulaire
- Gestion d'erreurs utilisateur

##  Tests Implémentés

### Tests Unitaires
```javascript
// Greeting.test.js
test('affiche le message correct', () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText('Bonjour, Alice')).toBeInTheDocument();
});
```

### Tests d'Intégration
```javascript
// Counter.test.js
test('incrémente le compteur au clic', () => {
  render(<Counter />);
  const button = screen.getByText('+');
  fireEvent.click(button);
  expect(screen.getByText('Compteur : 1')).toBeInTheDocument();
});
```

### Tests de Validation
```javascript
// ContactForm.test.js
test('affiche une erreur si le champ email est vide', () => {
  render(<ContactForm />);
  const submitButton = screen.getByText('Soumettre');
  fireEvent.click(submitButton);
  expect(screen.getByText('L\'email est requis')).toBeInTheDocument();
});
```

##  Installation et Démarrage

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd tp-jsx-tests

# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm start
```

L'application sera accessible à l'adresse : `http://localhost:3000`

### Commandes Disponibles
```bash
# Lancer l'application
npm start

# Exécuter les tests
npm test

# Lancer les tests avec couverture
npm test -- --coverage

# Build pour la production
npm run build

# Analyser le bundle
npm run build && npx serve -s build
```

##  Fonctionnalités de l'Interface

- **Design Moderne** : Interface avec dégradés et animations CSS
- **Responsive** : Adapté à tous les appareils
- **Interactif** : Effets de hover et transitions fluides
- **Accessible** : Respect des bonnes pratiques ARIA

##  Concepts Techniques Détaillés

### JSX vs JavaScript Pur
```jsx
// JSX
const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

// JavaScript équivalent
const elementJS = React.createElement(
  'h1',
  { className: 'titre' },
  'Bonjour JavaScript pur'
);
```

### Higher-Order Components (HOC)
```javascript
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Props reçues :', props);
    return <WrappedComponent {...props} />;
  };
}
```

### Render Props Pattern
```javascript
function DataLoader({ render }) {
  const data = ['Alice', 'Bob', 'Charlie'];
  return <div>{render(data)}</div>;
}
```

## Résultats 


https://github.com/user-attachments/assets/f3a23516-f5a2-42e2-bdb9-ab0338414ed4



https://github.com/user-attachments/assets/fc026fdf-7c00-4579-8fa2-b597d46902f3





https://github.com/user-attachments/assets/1935d35c-5c55-452d-a360-9b838372fb9c





##  Bonnes Pratiques Implémentées

1. **Composants Réutilisables** : HOC et Render Props
2. **Tests Automatisés** : Couverture complète des fonctionnalités
3. **Code Maintenable** : Separation of Concerns
4. **Performance** : Optimisations React et CSS
5. **Accessibilité** : Labels et attributs ARIA
6. **Responsive Design** : Mobile-first approach





##  Auteur

**aicha barahou**  

