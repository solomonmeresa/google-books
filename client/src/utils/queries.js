import gql from 'graphql-tag';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      savedBooks
          {
          _id
          authors
          description
          image
          link
          title
      }
    }
  }
`;