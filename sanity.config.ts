import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { codeInput } from '@sanity/code-input';


import StudioNavBar from './app/Components/StudioNavBar';

const projectId = <string>process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = <string> process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath:"/studio",
  name: 'SpiningRope_Blog_Studio',
  title: 'SpiningRope Blog Studio',
  
  projectId,
  dataset,

  plugins: [deskTool(), visionTool(),codeInput()],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
     navbar:StudioNavBar
    }
  },
  
})
