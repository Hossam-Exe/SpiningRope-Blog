import {defineCliConfig} from 'sanity/cli'

const projectId = <string>process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = <string> process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  }
})
