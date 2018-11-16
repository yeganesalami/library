import axios from 'axios';

export const fetch = (books) => {
  return {
    type: "FETCH_BOOKS",
    books
  }
}

export const fetchBooks = () => {
  return dispatch => {
    return axios.get('/api/books')
      .then(res => { dispatch(fetch(res.data)) })
      .catch(err => { throw (err) })
  }
}


export const addBook = (title, author, description, free, category) => {
  return {
    type: "ADD_BOOK",
    title,
    author,
    description,
    free,
    category
  };
};

export const deleteBook = id => {
  return {
    type: "DELETE_BOOK",
    id
  };
};

export const updateBook = (id, title, author, description, free, category) => {
  return {
    type: "UPDATE_BOOK",
    id,
    title,
    author,
    description,
    free,
    category
  };
};
