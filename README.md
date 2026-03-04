# 💡 Gestion des Suggestions – Angular Project

Application web développée avec **Angular 18** permettant la gestion des suggestions au sein d’un campus ou d’une organisation.

---

## 🚀 Description

Cette application permet aux utilisateurs de :

- ➕ Ajouter une suggestion
- 📋 Consulter la liste des suggestions
- 🔍 Voir les détails d’une suggestion
- ✏️ Modifier une suggestion
- 👍 Ajouter des likes
- 🏷️ Classer par catégorie
- 📅 Voir la date et le statut
- ❌ Accéder à une page 404 personnalisée

---

## 🛠️ Technologies utilisées

- Angular 18
- TypeScript
- HTML5
- CSS3 (Design moderne – Glassmorphism)
- Angular Router
- Reactive Forms

---

## 🧠 Concepts Angular appliqués

- Routing & Navigation
- Reactive Forms avec validations
- Data Binding
- Directives (`*ngIf`, `*ngFor`, `ngClass`)
- Services & Injection de dépendances
- Paramètres dynamiques (`/suggestions/:id`)
- Architecture modulaire

---

## 📂 Structure du projet
src/
│
├── app/
│ ├── components/
│ │ ├── home/
│ │ ├── suggestions-list/
│ │ ├── suggestion-details/
│ │ ├── add-suggestion/
│ │ ├── edit-suggestion/
│ │ └── not-found/
│ │
│ ├── services/
│ │ └── suggestion.service.ts
│ │
│ └── app-routing.module.ts
│
└── index.html


---

## ⚙️ Installation

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/ton-username/ton-repository.git
2️⃣ Installer les dépendances
npm install
3️⃣ Lancer le serveur de développement
ng serve
Puis ouvrir :

http://localhost:4200/
