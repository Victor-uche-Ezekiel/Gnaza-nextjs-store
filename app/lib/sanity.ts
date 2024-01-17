import { createClient } from "next-sanity";

const PROJECT_ID = process.env.PROJECT_ID;

export const client = createClient({
  apiVersion: "2023-09-23",
  dataset: "production",
  projectId: PROJECT_ID,
  useCdn: false,
});
