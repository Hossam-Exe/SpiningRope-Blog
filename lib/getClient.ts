import { createClient } from "@sanity/client";

import imageUrlBuilder from '@sanity/image-url';


export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET 
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION 
const token =process.env.SANITY_READ_TOKEN

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn:true,
  token,
  
});


const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source)
}