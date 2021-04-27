import { ApolloClient, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

const restLink = new RestLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.API_URL
      : process.env.LOCALHOST_URL,
})

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
})

export default client
