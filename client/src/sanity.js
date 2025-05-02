import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "r02fqaop", // Replace with your actual Sanity project ID
  dataset: "production", // Or the correct dataset
  apiVersion: "2023-01-01", // ISO date string
  useCdn: true,
});
