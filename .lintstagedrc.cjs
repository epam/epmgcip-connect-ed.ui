module.exports = {
  "src/**/*.{js,ts,jsx,tsx}": [
    () => "npm run lint:types",
    "npm run lint -- --fix",
  ],
};
