import { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  schema: process.env.VITE_API_URL,
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/shared/api/gql/": {
      preset: "client",
      plugins: [],
    },
  },
  watch: true,
};

export default config;
