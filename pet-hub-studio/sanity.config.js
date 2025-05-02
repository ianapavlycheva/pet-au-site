// import dotenv from 'dotenv'
// dotenv.config()

// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'default',
//   title: 'pet-hub-studio',

//   // projectId: 'r02fqaop',
//   // dataset: 'production',

//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET,

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })

import dotenv from 'dotenv'

// Load environment variables from the .env file
dotenv.config()

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'pet-hub-studio',

  // Access project ID and dataset from environment variables
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
// import dotenv from 'dotenv'
// dotenv.config()

// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'default',
//   title: 'pet-hub-studio',

//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET,

//   // Example of using the API token
//   api: {
//     token: process.env.SANITY_API_TOKEN, // Use the token for authenticated requests
//   },

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })
