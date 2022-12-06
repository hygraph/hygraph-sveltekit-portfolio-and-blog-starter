import { GraphQLClient } from 'graphql-request'
const HYGRAPH_ENDPOINT = import.meta.env.VITE_HYGRAPH_ENDPOINT
export const client = new GraphQLClient(HYGRAPH_ENDPOINT)
