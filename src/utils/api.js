const api = "http://localhost:3001";
// Generate a unique token for storing data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
  'Content-Type': 'application/json',
};

export const getCategories = () =>
  fetch(`${api}/categories`, {
    headers
  })
    .then(res => res.json())
    .then(data => data.categories);

export const getAllPosts = () =>
  fetch(`${api}/posts`, {
    headers
  })
    .then(res => res.json())
    .then(data => data);

export const getPost = id =>
  fetch(`${api}/posts/${id}`, {
    headers
  }).then(res => res.json());

export const getAllPostsInCategory = category =>
  fetch(`${api}/${category}/posts`, {
    headers
  })
    .then(res => res.json())
    .then(data => data);

export const addPost = ({ id, timestamp, title, body, author, category }) =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      id,
      timestamp,
      title,
      body,
      author,
      category
    })
  }).then(res => res.json());

export const editPost = ({ id, title, body }) =>
  fetch(`${api}/posts/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      title,
      body
    })
  }).then(res => res.json());

export const voteOnPost = ({ id, option }) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      option
    })
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: "DELETE",
    headers
  });

export const getCommentsForPost = id =>
  fetch(`${api}/posts/${id}/comments`, {
    headers
  })
    .then(res => res.json())
    .then(data => data);

export const addComment = ({ body, author, parentId, id, timestamp }) =>
  fetch(`${api}/comments`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      body,
      author,
      parentId,
      id,
      timestamp
    })
  }).then(res => res.json());

export const editComment = ({ id, body, timestamp }) =>
  fetch(`${api}/comments/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      body,
      timestamp
    })
  }).then(res => res.json());

export const voteOnComment = ({ id, option }) =>
  fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      option
    })
  }).then(res => res.json());

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, {
    method: "DELETE",
    headers
  });
