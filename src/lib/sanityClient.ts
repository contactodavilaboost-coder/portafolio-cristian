import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'q56bg2ty',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})