import {gql} from 'apollo-boost'

const getBooksQuery = gql`
  {
    novels{
      title
      authors
      synopsis 
      image
      link
    }
  }
`
const getAuthorsQuery = gql`
  query($id: String!) {
    authors(id: $id) {
      id
      authors
    }
  }
`

const getAuthorsBooksQuery = gql`
  query($id: String!) {
    authors(id: $id) {
      id
      title
      authors
      synopsis 
      image
      link
    }
  }
`
const addBookMutation = gql`
  mutation($title: String!, $authors: String!, $synopsis: String!, $image: String!, $link: String!, $id: String!) {
    addNovel(title: $title, authors: $authors, synopsis: $synopsis, image: $image, link: $link, id: $id) {
        title
      }
  }
`

const deleteBookMutation = gql`
  mutation($link: String!) {
    deleteNovel(link: $link)
  }
`

export { getBooksQuery, getAuthorsQuery, 
  getAuthorsBooksQuery, addBookMutation, deleteBookMutation }