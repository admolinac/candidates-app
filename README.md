# Welcome to the Candidates App (ReactJS)

This is a simple ReactJS application designed to display a list of candidates, each represented using a `Candidate` component.

## ⚙️ About the App

This app demonstrates:

* **File-based routing** using the **TanStack Router** library. Routes are defined as files under the `src/routes` directory.
* **Schema validation** with **Zod**.
* **Improved import paths** using the **vite-tsconfig-paths** plugin to avoid complex relative imports.
* **Dynamic and conditional rendering** using ternary operators and the `map()` function.

If the candidates list is empty, the app displays the default message:

> “No candidates available”.

Otherwise, it renders a list of cards, one for each candidate.

## 🤖 Candidate Component

The `Candidate` component receives the following props:

* `name`
* `age`
* `experience`
* `status`
* `skills`
* `working`
* `imageName`
* `children`

It renders a card with the candidate’s information.
Based on the `working` prop, it conditionally displays:

* ✅ **"Currently working"** — if the candidate is employed
* ❌ **"Not currently working"** — if the candidate is not

### Children Support
The component also accepts a `children` prop, which allows you to inject additional HTML or React content into the candidate card. This can be useful for rendering custom messages, actions, or detailed content per candidate.

## 🎨 Styling

All styles for the `Candidate` component are defined in:
`src/styles/Candidate.css`

## ▶️ To run this application

To install dependencies and start the app in development mode:

```bash
npm install
npm run start
```

## 🚀 Building for Production

To generate a production-ready build:

```bash
npm run build
```

