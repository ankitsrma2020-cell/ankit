# ankit reviewer notes

## Architecture

This is a small React + Vite starter application, using Vite for development/build tooling and React 18-style root rendering. The UI is currently organized around a single `App` component in `src/App.jsx`, with application bootstrapping and global stylesheet loading handled by `src/main.jsx`. Static feature content is defined locally as data and rendered through a mapped list.

## Conventions

- Use ES modules and JSX; the project is configured with `"type": "module"` in `package.json`, and imports omit semicolons throughout `src/App.jsx`, `src/main.jsx`, and `vite.config.js`.
- Keep the current starter structure lightweight: `src/main.jsx` owns mounting, while `src/App.jsx` owns the page UI and local interaction state.
- Define repeated static content as data rather than duplicating markup. `features` in `src/App.jsx` is an array of tuples rendered with `.map(...)`, using the feature number as the React key.
- Prefer React state for UI-only interaction. The “Start building” button uses `useState` in `src/App.jsx` and changes its label without introducing routing, persistence, or external data handling.
- Preserve semantic and accessible markup: the main navigation has `aria-label`, the brand link has an `aria-label`, the feature group has `aria-label`, and decorative symbols/arrows use `aria-hidden="true"` in `src/App.jsx`.
- External links opened in a new tab should retain `rel="noreferrer"`; the React documentation link in `src/App.jsx` is the reference pattern.
- Global styles are imported once from `src/main.jsx` via `./styles.css`; avoid adding style imports from individual components unless the organization is intentionally changed.
- Keep the Vite React plugin configuration minimal. `vite.config.js` only defines `react()` through `defineConfig`.

## Watch out for

- Do not remove the `StrictMode` wrapper or replace `createRoot` with legacy rendering without a clear compatibility reason (`src/main.jsx`).
- Avoid using array indexes as keys when changing the feature list; the existing stable `number` value is intentionally used as the key (`src/App.jsx`).
- Preserve accessibility attributes when refactoring visual elements. In particular, do not expose decorative arrow/illustration content to screen readers or remove labels from navigation and grouped sections.
- Check external-link security and behavior when adding links: links using `target="_blank"` should follow the existing `rel="noreferrer"` pattern.
- Keep interactive state updates connected to the button action; changing the displayed “You’re all set ✓” state without updating `started` would break the existing behavior.