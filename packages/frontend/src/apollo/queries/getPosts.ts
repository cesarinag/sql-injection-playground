import { gql } from '@apollo/client'

export default gql`
  query getPosts($search: String) {
    posts(search: $search) @rest(type: "Post", path: "posts?{args}") {
      id
      title
      body
      picture
      published
      category
      createdAt
    }
  }
`
