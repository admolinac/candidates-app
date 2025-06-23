# Welcome to the Candidates App (ReactJS)

This is a simple ReactJS application designed to display a list of candidates, each represented using a `Candidate` component.

## ⚙️ About the App

This app demonstrates:

* **File-based routing** using the [TanStack Router](https://tanstack.com/router) library. Routes are defined as files under the `src/routes` directory.
* **Schema validation** with [Zod](https://zod.dev/).
* **Improved import paths** using the [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths) plugin to avoid complex relative imports.
* **Dynamic and conditional rendering** using ternary operators and the `map()` function.
* **Clipboard API integration** to enable copying candidate data. When the "Copy Data" button is clicked:
  * The app attempts to write candidate details to the system clipboard using `navigator.clipboard.writeText`.
  * If successful, the browser displays a success alert.
  * If an error occurs, an error alert is shown instead.

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

## 🎨 Styling

Styling in this project is handled using:

* [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework.
* [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) — for safely merging Tailwind class names without conflicts.
* [clsx](https://www.npmjs.com/package/clsx) — for building `className` strings conditionally.

Component-specific styles are also defined in:
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

