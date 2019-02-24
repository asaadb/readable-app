import {
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
  REMOVE_POST,
  VOTE_POST
} from "../actions/posts";

export default function posts(state = [], action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case GET_POSTS:
      return newState.concat(...action.posts);
    case ADD_POST:
      return newState.concat(action.post);
    case EDIT_POST:
      let post = newState.find(post => post.id === action.id);
      post.body = action.body;
      post.title = action.title;
      return newState;
    case VOTE_POST:
      if (action.option === "upVote") {
        newState.find(post => post.id === action.id).voteScore += 1;
        return newState;
      } else {
        newState.find(post => post.id === action.id).voteScore -= 1;
        return newState;
      }
    case REMOVE_POST:
      return newState.filter(post => post.id !== action.id);
    default:
      return state;
  }
}
