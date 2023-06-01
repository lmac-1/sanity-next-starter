// Here we define everything about our Sanity project
import { defineConfig } from "sanity";
// We need this to be able to view the Sanity Studio at all
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  // We will move this into an environmental variable but it's okay that it's public
  projectId: "d44irnih",
  dataset: "production",
  title: "Sanity Page Builder",
  // Today's date
  apiVersion: "2023-06-01",
  // URL of where we want our Sanity Studio to live within the project
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
