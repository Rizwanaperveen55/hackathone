import { createClient } from "next-sanity";

// ✅ Fetch values directly from environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-01-01";
const token = process.env.SANITY_API_TOKEN; // ❌ Do NOT expose this on the frontend!

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token, // ✅ Use token for server-side requests only
  useCdn: process.env.NODE_ENV === "production", // Enable CDN in production for caching
});
