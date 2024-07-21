import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `${process.env.VITE_REACT_APP_BACKEND_URL}/graphql`,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/fragments/*.{ts,tsx}", "src/queries/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      config: {
        enumsAsTypes: true,
        extractAllFieldsToTypes: true,
        preResolveTypes: true,
        onlyOperationTypes: true,
        noSchemaStitching: true,
      },
      presetConfig: {
        gqlTagName: "gql",
        documentNodeImportFragments: true,
        fragmentMasking: false,
      },
    },
  },
};

export default config;
