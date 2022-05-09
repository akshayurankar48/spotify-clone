export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   "BQCXIfakzvqDXCW7SPQYfQH5FVBZsFO9YI3wqNvneBbw00jfmZ…eJj2P4eEMEuCo1tghqUO-bSOp7GOG9cyoL6WBZ3cAqTI9X1E5",
};

const reducer = (state, action) => {
  // Action -> Type, payload

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return { ...state, token: action.token };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
