module.exports = {
  "src/!(__generated__)**/*.{js,ts,jsx,tsx}": [
    () => "npm run lint:types",
    "npm run lint -- --fix",
  ],
};
