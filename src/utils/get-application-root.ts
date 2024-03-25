export const getApplicationRoot = () => {
  const root = document.querySelector("#root");

  if (!root) {
    throw new Error("Application root is not found");
  }

  return root;
};
