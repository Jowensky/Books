import axios from "axios";

export default {
  googleBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?maxResults=9&q=" + query)
  }
};